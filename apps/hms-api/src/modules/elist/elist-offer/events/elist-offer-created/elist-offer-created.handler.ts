import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { ElistOfferCreatedEvent } from './elist-offer-created.event';

@EventsHandler(ElistOfferCreatedEvent)
export class ElistOfferCreatedHandler implements IEventHandler<ElistOfferCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: ElistOfferCreatedEvent) {
    const {
      data: { id, elist_id, ...rest },
      metadata,
    } = event;

    const createObj = {
      data: {
        id,
        elist: {
          connect: {
            id: elist_id,
          },
        },
        ...rest,
        created_at: metadata.created_at,
      },
    };
    await this.prisma.elistOffer.create(createObj);
  }
}
