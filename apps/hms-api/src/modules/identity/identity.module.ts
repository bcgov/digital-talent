import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { IdentityCommandHandlers } from './commands';
import { IdentityEventHandlers } from './events';
import { IdentityQueryHandlers } from './queries';
import { IdentityResolver } from './resolvers/identity.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [IdentityResolver, ...IdentityCommandHandlers, ...IdentityEventHandlers, ...IdentityQueryHandlers],
})
export class IdentityModule {}
