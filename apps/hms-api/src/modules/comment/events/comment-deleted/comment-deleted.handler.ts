import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { CommentDeletedEvent } from './comment-deleted.event';

@EventsHandler(CommentDeletedEvent)
export class CommentDeletedHandler implements IEventHandler<CommentDeletedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: CommentDeletedEvent) {
    const {
      data: { id },
      metadata,
    } = event;

    await this.prisma.comment.update({
      where: { id },
      data: {
        deleted_at: metadata.created_at,
      },
    });
  }
}
