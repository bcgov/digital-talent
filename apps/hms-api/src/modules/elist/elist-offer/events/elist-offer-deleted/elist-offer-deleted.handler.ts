import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ElistOfferDeletedEvent } from './elist-offer-deleted.event';

@EventsHandler(ElistOfferDeletedEvent)
export class ElistOfferDeletedHandler implements IEventHandler<ElistOfferDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ElistOfferDeletedEvent) {
    const {
      data: { id },
      metadata,
    } = event;

    await this.prisma.elistOffer.update({
      where: { id },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
