import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { CommandHandlers } from './commands';
import { EventHandlers } from './events';
import { UserResolver } from './user.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [UserResolver, ...CommandHandlers, ...EventHandlers],
})
export class UserModule {}
