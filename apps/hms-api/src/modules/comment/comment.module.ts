import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { CommentCommandHandlers } from './commands';
import { CommentEventHandlers } from './events';
import { CommentQueryHandlers } from './queries';
import { CommentResolver } from './resolvers/comment.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [CommentResolver, ...CommentCommandHandlers, ...CommentEventHandlers, ...CommentQueryHandlers],
})
export class CommentModule {}
