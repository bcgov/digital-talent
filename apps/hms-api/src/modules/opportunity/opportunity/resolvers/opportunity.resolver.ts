import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { GraphQLUUID } from 'graphql-scalars';
import {
  Competition,
  FindManyOpportunityArgs,
  Ministry,
  Opportunity,
  User,
} from '../../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { GetCompetitionQuery } from '../../../competition/competition/queries/get-competition/get-competition.query';
import { GetMinistryQuery } from '../../../ministry/queries/get-ministry/get-ministry.query';
import { GetUserQuery } from '../../../user/queries/get-user/get-user.query';
import { CreateOpportunityCommand } from '../commands/create-opportunity/create-opportunity.command';
import { DeleteOpportunityCommand } from '../commands/delete-opportunity/delete-opportunity.command';
import { UpdateOpportunityCommand } from '../commands/update-opportunity/update-opportunity.command';
import { CreateOpportunityInput } from '../inputs/create-opportunity.input';
import { UpdateOpportunityInput } from '../inputs/update-opportunity.input';
import { GetOpportunitiesQuery } from '../queries/get-opportunities/get-opportunities.query';
import { GetOpportunityQuery } from '../queries/get-opportunity/get-opportunity.query';

@Resolver((of) => Opportunity)
export class OpportunityResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Mutation((returns) => GraphQLString)
  async createOpportunity(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateOpportunityInput }) data: CreateOpportunityInput,
  ) {
    const { id, ...restData } = data;
    const command = new CreateOpportunityCommand(
      { id, hiring_manager_id: userId, ...restData },
      { created_by: userId },
    );
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async updateOpportunity(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => UpdateOpportunityInput }) data: UpdateOpportunityInput,
  ) {
    const command = new UpdateOpportunityCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async deleteOpportunity(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'id', type: () => String }) id: string,
  ) {
    const command = new DeleteOpportunityCommand({ id }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Query((returns) => [Opportunity], { name: 'opportunities' })
  async getOpportunities(@Args() args: FindManyOpportunityArgs) {
    return this.queryBus.execute(new GetOpportunitiesQuery(args));
  }

  @Query((returns) => Opportunity, { name: 'opportunity' })
  async getOpportunity(@Args('id', { type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetOpportunityQuery(id));
  }

  @ResolveField('competition', (returns) => Competition)
  competition(@Parent() opportunity: Opportunity) {
    return this.queryBus.execute(new GetCompetitionQuery(opportunity.competition_id));
  }

  @ResolveField('hiring_manager', (returns) => User)
  hiringManager(@Parent() opportunity: Opportunity) {
    return this.queryBus.execute(new GetUserQuery(opportunity.hiring_manager_id));
  }

  @ResolveField('ministry', (returns) => Ministry)
  ministry(@Parent() opportunity: Opportunity) {
    return this.queryBus.execute(new GetMinistryQuery(opportunity.ministry_id));
  }
}
