import { Controller, Post, Req } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../../../prisma/prisma.service';
import { SyncUserCommand } from '../../../user/commands/sync-user/sync-user.command';
import { ApplicationService } from '../application.service';
import { CreateApplicationCommand } from '../commands/create-application/create-application.command';

@Controller('rest/applications')
export class ApplicationController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly prismaService: PrismaService,
    private readonly applicationService: ApplicationService,
  ) {}

  @Post('import-csv')
  async importCsv(@Req() request: any): Promise<any> {
    // Parse CSV Data
    const csvData = request.body;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { requisitionNumber, positionTitle, parsedData } = this.applicationService.parseQSTCSV(csvData);

    // Extract the userId from the request - you'll need to implement or adjust this as per your authentication setup
    const userId = request.user.id;
    const metadata = { created_by: userId };

    const processRow = async (data) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { firstName, lastName, ministry, deltek_id, city, email, jsonData } = data;

      // check if a user with this deltek_id already exists, if not, create it
      // get user by deltek_id
      const existingUser = await this.prismaService.user.findUnique({
        where: { deltek_id },
      });

      let userId = '';
      if (!existingUser) {
        userId = uuidv4();
        const command = new SyncUserCommand(
          { id: userId, roles: ['candidate'], deltek_id, email, name: `${firstName} ${lastName}` },
          metadata,
        );

        // eslint-disable-next-line no-await-in-loop
        await this.commandBus.execute(command);
      } else {
        userId = existingUser.id;
      }

      // check if application for this user already exists
      // todo: check for competition link as well

      const existingApplications = await this.prismaService.application.findMany({
        where: { applicant_id: userId },
      });

      if (existingApplications.length === 0) {
        const command = new CreateApplicationCommand({ id: uuidv4(), applicant_id: userId, json: jsonData }, metadata);
        // eslint-disable-next-line no-await-in-loop
        await this.commandBus.execute(command);
      }
    };

    await Promise.all(parsedData.map((row) => processRow(row)));
    return { status: 'success', message: 'CSV data imported successfully!' };
  }
}
