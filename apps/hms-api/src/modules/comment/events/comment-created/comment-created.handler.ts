import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { CommentCreatedEvent } from './comment-created.event';

@EventsHandler(CommentCreatedEvent)
export class CommentCreatedHandler implements IEventHandler<CommentCreatedEvent> {
  constructor(private readonly prisma: PrismaService) {}

  async handle(event: CommentCreatedEvent) {
    const {
      data: { id, user_id, record_id, record_type, text },
      metadata,
    } = event;
    const createObj = {
      data: {
        id,
        user: {
          connect: {
            id: user_id,
          },
        },
        record_id,
        record_type,
        text, // Assuming that 'json' field is a stringified JSON
        created_at: new Date(metadata.created_at),
      },
    };
    await this.prisma.comment.create(createObj);
  }
}
