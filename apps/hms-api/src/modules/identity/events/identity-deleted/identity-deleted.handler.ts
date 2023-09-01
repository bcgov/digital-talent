import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { IdentityDeletedEvent } from './identity-deleted.event';

@EventsHandler(IdentityDeletedEvent)
export class IdentityDeletedHandler implements IEventHandler<IdentityDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: IdentityDeletedEvent) {
    const {
      data: { sub, identity_provider },
      metadata,
    } = event;

    await this.prisma.identity.update({
      where: { sub_identity_provider: { sub, identity_provider } },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
