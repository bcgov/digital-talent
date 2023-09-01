import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { CommentCommandHandlers } from './commands';
import { CommentResolver } from './comment.resolver';
import { CommentEventHandlers } from './events';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [CommentResolver, ...CommentCommandHandlers, ...CommentEventHandlers],
})
export class CommentModule {}
