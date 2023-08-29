import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetPositionQuery } from './get-position.query';

@QueryHandler(GetPositionQuery)
export class GetPositionHandler implements IQueryHandler<GetPositionQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetPositionQuery): Promise<any> {
    return this.prisma.position.findUnique({ where: { id: query.id } });
  }
}
