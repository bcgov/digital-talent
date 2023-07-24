import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { AccountSyncedEvent } from './account-synced.event';

@EventsHandler(AccountSyncedEvent)
export class AccountSyncedHandler implements IEventHandler<AccountSyncedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: AccountSyncedEvent) {
    const {
      data: { id, sub, identity_provider, ...rest },
      metadata,
    } = event;

    const queries: any[] = [
      this.prisma.user.upsert({
        where: { id },
        create: { id, ...rest, created_at: metadata.created_at },
        update: { ...rest, updated_at: metadata.created_at },
      }),
    ];

    if (identity_provider && sub) {
      queries.push(
        this.prisma.identity.upsert({
          where: { sub_identity_provider: { identity_provider, sub } },
          create: { sub, identity_provider, user_id: id, created_at: metadata.created_at },
          update: { sub, identity_provider, user_id: id, updated_at: metadata.created_at },
        }),
      );
    }

    await this.prisma.$transaction(queries);
  }
}
