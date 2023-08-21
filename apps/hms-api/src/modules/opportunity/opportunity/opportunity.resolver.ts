import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateOpportunityCommand } from './commands/create-opportunity/create-opportunity.command';
import { DeleteOpportunityCommand } from './commands/delete-opportunity/delete-opportunity.command';
import { UpdateOpportunityCommand } from './commands/update-opportunity/update-opportunity.command';
import { OpportunityEntity } from './entities/opportunity.entity';
import { CreateOpportunityInput } from './inputs/create-opportunity.input';
import { UpdateOpportunityInput } from './inputs/update-opportunity.input';

@Resolver((of) => OpportunityEntity)
export class OpportunityResolver {
  constructor(private readonly commandBus: CommandBus, private readonly prisma: PrismaService) {}

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

  @Query((returns) => [OpportunityEntity])
  async opportunities() {
    return this.prisma.opportunity.findMany();
  }

  @Query((returns) => OpportunityEntity)
  async opportunity(@Args('id', { type: () => GraphQLString }) id: string) {
    return this.prisma.opportunity.findUnique({
      where: { id },
    });
  }
}
