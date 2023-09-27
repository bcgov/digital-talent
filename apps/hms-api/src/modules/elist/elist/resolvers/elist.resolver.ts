import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { Elist, FindManyElistArgs } from '../../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { CreateElistCommand } from '../commands/create-elist/create-elist.command';
import { DeleteElistCommand } from '../commands/delete-elist/delete-elist.command';
import { UpdateElistCommand } from '../commands/update-elist/update-elist.command';
import { CreateElistInput } from '../inputs/create-elist.input';
import { UpdateElistInput } from '../inputs/update-elist.input';
import { GetElistQuery } from '../queries/get-elist/get-elist.query';
import { GetElistsQuery } from '../queries/get-elists/get-elists.query';

@Resolver((of) => Elist)
export class ElistResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Mutation((returns) => GraphQLString)
  async createElist(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateElistInput }) data: CreateElistInput,
  ) {
    const { id, ...restData } = data;
    const command = new CreateElistCommand({ id, applicant_id: userId, ...restData }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async updateElist(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => UpdateElistInput }) data: UpdateElistInput,
  ) {
    const command = new UpdateElistCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async deleteElist(@CurrentUser() { id: userId }: Express.User, @Args({ name: 'id', type: () => String }) id: string) {
    const command = new DeleteElistCommand({ id }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Query((returns) => [Elist])
  async elists(@Args() args?: FindManyElistArgs) {
    return this.queryBus.execute(new GetElistsQuery(args));
  }

  @Query((returns) => Elist)
  async elist(@Args('id', { type: () => GraphQLString }) id: string) {
    return this.queryBus.execute(new GetElistQuery(id));
  }
}
