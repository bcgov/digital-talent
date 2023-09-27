import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { Application, FindManyApplicationArgs } from '../../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { CreateApplicationCommand } from '../commands/create-application/create-application.command';
import { DeleteApplicationCommand } from '../commands/delete-application/delete-application.command';
import { UpdateApplicationCommand } from '../commands/update-application/update-application.command';
import { CreateApplicationInput } from '../inputs/create-application.input';
import { UpdateApplicationInput } from '../inputs/update-application.input';
import { GetApplicationQuery } from '../queries/get-application/get-application.query';
import { GetApplicationsQuery } from '../queries/get-applications/get-applications.query';

@Resolver((of) => Application)
export class ApplicationResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

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

  @Query((returns) => [Application])
  async applications(@Args() args?: FindManyApplicationArgs) {
    return this.queryBus.execute(new GetApplicationsQuery(args));
  }

  @Query((returns) => Application)
  async application(@Args('id', { type: () => GraphQLString }) id: string) {
    return this.queryBus.execute(new GetApplicationQuery(id));
  }
}