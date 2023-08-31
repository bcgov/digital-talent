import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetMinistryQuery } from './get-ministry.query';

@QueryHandler(GetMinistryQuery)
export class GetMinistryHandler implements IQueryHandler<GetMinistryQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetMinistryQuery): Promise<any> {
    return this.prisma.ministry.findUnique({
      where: {
        id: query.id,
      },
    });
  }
}
