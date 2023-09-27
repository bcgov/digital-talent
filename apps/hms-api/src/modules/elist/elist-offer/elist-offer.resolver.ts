import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { ElistOffer } from '../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateElistOfferCommand } from './commands/create-elist-offer/create-elist-offer.command';
import { DeleteElistOfferCommand } from './commands/delete-elist-offer/delete-elist-offer.command';
import { UpdateElistOfferCommand } from './commands/update-elist-offer/update-elist-offer.command';
import { CreateElistOfferInput } from './inputs/create-elist-offer.input';
import { UpdateElistOfferInput } from './inputs/update-elist-offer.input';

@Resolver((of) => ElistOffer)
export class ElistOfferResolver {
  constructor(private readonly commandBus: CommandBus, private readonly prisma: PrismaService) {}

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
  async elistOffers() {
    return this.prisma.elistOffer.findMany();
  }

  @Query((returns) => ElistOffer)
  async elistOffer(@Args('id', { type: () => GraphQLString }) id: string) {
    return this.prisma.elistOffer.findUnique({
      where: { id },
    });
  }
}
