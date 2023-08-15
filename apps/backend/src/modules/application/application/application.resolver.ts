import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { CreateApplicationCommand } from './commands/create-application/create-application.command';
import { UpdateApplicationCommand } from './commands/update-application/update-application.command';
import { ApplicationEntity } from './entities/application.entity';
import { CreateApplicationInput } from './inputs/create-application.input';
import { UpdateApplicationInput } from './inputs/update-application.input';
import { PrismaService } from '../../prisma/prisma.service';
import { DeleteApplicationCommand } from './commands/delete-application/delete-application.command';

@Resolver((of) => ApplicationEntity)
export class ApplicationResolver {
  constructor(private readonly commandBus: CommandBus, private readonly prisma: PrismaService) {}

  @Mutation((returns) => GraphQLString)
  async createApplication(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateApplicationInput }) data: CreateApplicationInput,
  ) {
    const { id, ...restData } = data;
    const command = new CreateApplicationCommand({ id, applicant_id: userId, ...restData }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async updateApplication(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => UpdateApplicationInput }) data: UpdateApplicationInput,
  ) {
    const command = new UpdateApplicationCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async deleteApplication(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'id', type: () => String }) id: string,
  ) {
    const command = new DeleteApplicationCommand({ id }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Query((returns) => [ApplicationEntity])
  async applications() {
    return this.prisma.application.findMany();
  }

  @Query((returns) => ApplicationEntity)
  async application(@Args('id', { type: () => GraphQLString }) id: string) {
    return this.prisma.application.findUnique({
      where: { id },
    });
  }
}
