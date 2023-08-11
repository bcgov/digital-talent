import { Controller, Post, Req } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { parse } from 'csv-parse/sync';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../../prisma/prisma.service';
import { SyncUserCommand } from '../../user/commands/sync-user/sync-user.command';
import { CreateApplicationCommand } from '../commands/create-application/create-application.command';

@Controller('rest/applications')
export class ApplicationController {
  constructor(private readonly commandBus: CommandBus, private readonly prismaService: PrismaService) {}

  @Post('import-csv')
  async importCsv(@Req() request: any): Promise<any> {
    // Parse CSV Data
    const csvData = request.body;

    // Split the CSV data into lines
    const lines = csvData.split('\n');

    // Extract and remove the first two lines
    const requisitionLine = lines.shift();
    const positionTitleLine = lines.shift();

    // Extract requisition number and position title
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const requisitionNumber = requisitionLine?.split(',')[1];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const positionTitle = positionTitleLine?.split(',')[1];

    // console.log('requisitionNumber: ', requisitionNumber);
    // console.log('positionTitle: ', positionTitle);

    // Rejoin the remaining lines into a new CSV string
    const newCsvData = lines.join('\n');

    const parsedData = parse(newCsvData, {
      columns: true, // Set to true if the first line of the CSV file contains column names
      skip_empty_lines: true,
    });

    // Extract the userId from the request - you'll need to implement or adjust this as per your authentication setup
    const userId = request.user.id;
    const metadata = { created_by: userId };

    // Iterate through rows and create applications
    for (const row of parsedData) {
      // Exclude unwanted columns by destructuring and omitting them
      const {
        'Applicant First Name': firstName,
        'Applicant Last Name': lastName,
        'Current Ministry': ministry,
        '': _,
        id: deltek_id,
        City: city,
        Email: email,
        ...restData
      } = row;

      // Create JSON from the rest of the row
      const jsonData = JSON.stringify(restData);

      //   console.log('row: ', row);
      //   console.log('jsonData: ', jsonData);

      // check if a user with this deltek_id already exists, if not, create it
      // get user by deltek_id
      // eslint-disable-next-line no-await-in-loop
      const existingUser = await this.prismaService.user.findUnique({
        where: { deltek_id },
      });
      //   console.log('existingUser: ', existingUser);
      //   console.log('for deltek_id: ', deltek_id);

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
      //   console.log('quering for existing applications.., userId: ', userId);

      // eslint-disable-next-line no-await-in-loop
      const existingApplications = await this.prismaService.application.findMany({
        where: { applicant_id: userId },
      });

      //   console.log('existingApplications: ', existingApplications);

      if (existingApplications.length === 0) {
        const command = new CreateApplicationCommand({ id: uuidv4(), applicant_id: userId, json: jsonData }, metadata);
        // eslint-disable-next-line no-await-in-loop
        await this.commandBus.execute(command);
      }
    }

    return { status: 'success', message: 'CSV data imported successfully!' };
  }
}
