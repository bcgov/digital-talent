import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { Competition, Elist, ElistOffer, FindManyElistArgs, User } from '../../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { GetCompetitionQuery } from '../../../competition/competition/queries/get-competition/get-competition.query';
import { GetUserQuery } from '../../../user/queries/get-user/get-user.query';
import { GetElistOffersQuery } from '../../elist-offer/queries/get-elist-offers/get-elist-offers.query';
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

  @ResolveField('applicant', (returns) => User)
  async applicant(@Parent() elist: Elist) {
    return this.queryBus.execute(new GetUserQuery(elist.applicant_id));
  }

  @ResolveField('competition', (returns) => Competition)
  async competition(@Parent() elist: Elist) {
    return this.queryBus.execute(new GetCompetitionQuery(elist.competition_id));
  }

  @ResolveField('offers', (returns) => [ElistOffer])
  async offers(@Parent() elist: Elist) {
    return this.queryBus.execute(new GetElistOffersQuery({ where: { elist_id: { equals: elist.id } } }));
  }
}
