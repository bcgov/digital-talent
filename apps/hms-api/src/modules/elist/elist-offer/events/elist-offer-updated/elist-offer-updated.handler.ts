import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ElistOfferUpdatedEvent } from './elist-offer-updated.event';

@EventsHandler(ElistOfferUpdatedEvent)
export class ElistOfferUpdatedHandler implements IEventHandler<ElistOfferUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ElistOfferUpdatedEvent) {
    const {
      data: { id, elist_id, ...rest },
      metadata,
    } = event;

    await this.prisma.elistOffer.update({
      where: { id },
      data: {
        ...(elist_id != null && {
          elist: {
            connect: { id: elist_id },
          },
        }),
        updated_at: metadata.created_at,
        ...rest,
      },
    });
  }
}
