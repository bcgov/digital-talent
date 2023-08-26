import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../../prisma/prisma.module';
import { ElistOfferCommandHandlers } from './commands';
import { ElistOfferEventHandlers } from './events';
import { ElistOfferResolver } from './elist-offer.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [ElistOfferResolver, ...ElistOfferCommandHandlers, ...ElistOfferEventHandlers],
})
export class ElistOfferModule {}
