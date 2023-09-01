import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { UserSyncedEvent } from './user-synced.event';

@EventsHandler(UserSyncedEvent)
export class UserSyncedHandler implements IEventHandler<UserSyncedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: UserSyncedEvent) {
    const {
      data: { id, ...rest },
      metadata,
    } = event;

    await this.prisma.user.upsert({
      where: { id },
      create: { id, ...rest, created_at: metadata.created_at },
      update: { ...rest, updated_at: metadata.created_at },
    });
  }
}
