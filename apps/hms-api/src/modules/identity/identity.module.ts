import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { IdentityCommandHandlers } from './commands';
import { IdentityEventHandlers } from './events';
import { IdentityResolver } from './identity.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [IdentityResolver, ...IdentityCommandHandlers, ...IdentityEventHandlers],
})
export class IdentityModule {}
