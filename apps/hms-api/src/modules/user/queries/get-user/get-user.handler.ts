import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetUserQuery } from './get-user.query';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetUserQuery): Promise<any> {
    return this.prisma.user.findUnique({ where: { id: query.id } });
  }
}
