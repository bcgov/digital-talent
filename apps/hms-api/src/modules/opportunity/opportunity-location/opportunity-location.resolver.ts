import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateOpportunityLocationCommand } from './commands/create-opportunity-location/create-opportunity-location.command';
import { DeleteOpportunityLocationCommand } from './commands/delete-opportunity-location/delete-opportunity-location.command';
import { OpportunityLocationEntity } from './entities/opportunity-location.entity';
import { CreateOpportunityLocationInput } from './inputs/create-opportunity-location.input';

@Resolver((of) => OpportunityLocationEntity)
export class OpportunityLocationResolver {
  constructor(private readonly commandBus: CommandBus, private readonly prisma: PrismaService) {}

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

  @Query((returns) => [OpportunityLocationEntity])
  async opportunityLocations() {
    return this.prisma.opportunityLocation.findMany();
  }

  @Query((returns) => OpportunityLocationEntity)
  async opportunityLocation(
    @Args({ name: 'opportunity_id', type: () => String }) opportunity_id: string,
    @Args({ name: 'location_id', type: () => String }) location_id: string,
  ) {
    return this.prisma.opportunityLocation.findUnique({
      where: {
        opportunity_id_location_id: {
          opportunity_id,
          location_id,
        },
      },
    });
  }
}
