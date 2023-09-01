import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { IdentityCreatedEvent } from './identity-created.event';

@EventsHandler(IdentityCreatedEvent)
export class IdentityCreatedHandler implements IEventHandler<IdentityCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: IdentityCreatedEvent) {
    const {
      data: { sub, identity_provider, user_id, ...rest },
      metadata,
    } = event;

    await this.prisma.identity.create({
      data: {
        sub,
        identity_provider,
        user: {
          connect: {
            id: user_id,
          },
        },
        ...rest,
        created_at: metadata.created_at,
      },
    });
  }
}
