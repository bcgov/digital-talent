import { ICommandHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetCommentQuery } from './get-comment.query';

@QueryHandler(GetCommentQuery)
export class GetCommentHandler implements ICommandHandler<GetCommentQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetCommentQuery): Promise<any> {
    return this.prisma.comment.findUnique({
      where: {
        id: query.id,
      },
    });
  }
}
