import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import {
  FindManyOpportunityLocationArgs,
  Location,
  Opportunity,
  OpportunityLocation,
} from '../../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { GetLocationQuery } from '../../../location/queries/get-location/get-location.query';
import { GetOpportunityQuery } from '../../opportunity/queries/get-opportunity/get-opportunity.query';
import { CreateOpportunityLocationCommand } from '../commands/create-opportunity-location/create-opportunity-location.command';
import { DeleteOpportunityLocationCommand } from '../commands/delete-opportunity-location/delete-opportunity-location.command';
import { CreateOpportunityLocationInput } from '../inputs/create-opportunity-location.input';
import { GetOpportunityLocationQuery } from '../queries/get-opportunity-location/get-opportunity-location.query';
import { GetOpportunityLocationsQuery } from '../queries/get-opportunity-locations/get-opportunity-locations.query';

@Resolver((of) => OpportunityLocation)
export class OpportunityLocationResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Mutation((returns) => GraphQLString)
  async createOpportunityLocation(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateOpportunityLocationInput }) data: CreateOpportunityLocationInput,
  ) {
    const { opportunity_id, location_id, ...restData } = data;
    const command = new CreateOpportunityLocationCommand(
      { opportunity_id, location_id, ...restData },
      { created_by: userId },
    );
    await this.commandBus.execute(command);

    return command.data.opportunity_id;
  }

  @Mutation((returns) => GraphQLString)
  async deleteOpportunityLocation(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'opportunity_id', type: () => String }) opportunity_id: string,
    @Args({ name: 'location_id', type: () => String }) location_id: string,
  ) {
    const command = new DeleteOpportunityLocationCommand({ opportunity_id, location_id }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.opportunity_id;
  }

  @Query((returns) => [OpportunityLocation])
  async opportunityLocations(@Args() args?: FindManyOpportunityLocationArgs) {
    return this.queryBus.execute(new GetOpportunityLocationsQuery(args));
  }

  @Query((returns) => OpportunityLocation)
  async opportunityLocation(
    @Args({ name: 'opportunity_id', type: () => String }) opportunity_id: string,
    @Args({ name: 'location_id', type: () => String }) location_id: string,
  ) {
    return this.queryBus.execute(new GetOpportunityLocationQuery(opportunity_id, location_id));
  }

  @ResolveField('location', (returns) => Location)
  async location(@Parent() opportunityLocation: OpportunityLocation) {
    return this.queryBus.execute(new GetLocationQuery(opportunityLocation.location_id));
  }

  @ResolveField('opportunity', (returns) => Opportunity)
  async opportunity(@Parent() opportunityLocation: OpportunityLocation) {
    return this.queryBus.execute(new GetOpportunityQuery(opportunityLocation.opportunity_id));
  }
}
