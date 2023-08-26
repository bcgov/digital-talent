import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ElistOfferUpdatedEvent } from './elist-offer-updated.event';

@EventsHandler(ElistOfferUpdatedEvent)
export class ElistOfferUpdatedHandler implements IEventHandler<ElistOfferUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ElistOfferUpdatedEvent) {
    const {
      data: { id, elistId, ...rest },
      metadata,
    } = event;

    await this.prisma.elistOffer.update({
      where: { id },
      data: {
        ...(elistId != null && {
          elist: {
            connect: { id: elistId },
          },
        }),
        updated_at: metadata.created_at,
        ...rest,
      },
    });
  }
}
