import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { UserCommandHandlers } from './commands';
import { UserEventHandlers } from './events';
import { UserQueryHandlers } from './queries';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [UserResolver, ...UserCommandHandlers, ...UserEventHandlers, ...UserQueryHandlers],
  exports: [UserResolver],
})
export class UserModule {}
