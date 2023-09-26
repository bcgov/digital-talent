import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetIdentitiesQuery } from './get-identities.query';

@QueryHandler(GetIdentitiesQuery)
export class GetIdentitiesHandler implements IQueryHandler<GetIdentitiesQuery> {
  constructor(readonly prisma: PrismaService) {}

  async execute({ args: { where, orderBy, take, skip } }: GetIdentitiesQuery): Promise<any> {
    return this.prisma.identity.findMany({
      where: {
        deleted_at: null,
        ...where,
      },
      orderBy,
      take,
      skip,
    });
  }
}
