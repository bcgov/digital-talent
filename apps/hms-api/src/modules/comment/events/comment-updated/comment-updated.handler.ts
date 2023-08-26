import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { CommentUpdatedEvent } from './comment-updated.event';

@EventsHandler(CommentUpdatedEvent)
export class CommentUpdatedHandler implements IEventHandler<CommentUpdatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: CommentUpdatedEvent) {
    const {
      data: { id, user_id, text },
      metadata,
    } = event;

    await this.prisma.comment.update({
      where: { id },
      data: {
        ...(user_id != null && {
          user: {
            connect: { id: user_id },
          },
        }),
        text, // Assuming that 'json' field is a stringified JSON
        updated_at: metadata.created_at,
      },
    });
  }
}
