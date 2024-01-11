import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { Elist, ElistOffer, FindManyElistOfferArgs, Opportunity } from '../../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { GetOpportunityQuery } from '../../../opportunity/opportunity/queries/get-opportunity/get-opportunity.query';
import { GetElistQuery } from '../../elist/queries/get-elist/get-elist.query';
import { CreateElistOfferCommand } from '../commands/create-elist-offer/create-elist-offer.command';
import { DeleteElistOfferCommand } from '../commands/delete-elist-offer/delete-elist-offer.command';
import { UpdateElistOfferCommand } from '../commands/update-elist-offer/update-elist-offer.command';
import { CreateElistOfferInput } from '../inputs/create-elist-offer.input';
import { UpdateElistOfferInput } from '../inputs/update-elist-offer.input';
import { GetElistOfferQuery } from '../queries/get-elist-offer/get-elist-offer.query';
import { GetElistOffersQuery } from '../queries/get-elist-offers/get-elist-offers.query';

@Resolver((of) => ElistOffer)
export class ElistOfferResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Mutation((returns) => GraphQLString)
  async createElistOffer(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateElistOfferInput }) data: CreateElistOfferInput,
  ) {
    const { id, ...restData } = data;
    const command = new CreateElistOfferCommand({ id, ...restData }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async updateElistOffer(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => UpdateElistOfferInput }) data: UpdateElistOfferInput,
  ) {
    const command = new UpdateElistOfferCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async deleteElistOffer(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'id', type: () => String }) id: string,
  ) {
    const command = new DeleteElistOfferCommand({ id }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Query((returns) => [ElistOffer])
  async elistOffers(@Args() args?: FindManyElistOfferArgs) {
    return this.queryBus.execute(new GetElistOffersQuery(args));
  }

  @Query((returns) => ElistOffer)
  async elistOffer(@Args('id', { type: () => GraphQLString }) id: string) {
    return this.queryBus.execute(new GetElistOfferQuery(id));
  }

  @ResolveField('elist', (returns) => Elist)
  async elist(@Parent() offer: ElistOffer) {
    return this.queryBus.execute(new GetElistQuery(offer.elist_id));
  }

  @ResolveField('opportunity', (returns) => Opportunity)
  async opportunity(@Parent() offer: ElistOffer) {
    return this.queryBus.execute(new GetOpportunityQuery(offer.opportunity_id));
  }
}
