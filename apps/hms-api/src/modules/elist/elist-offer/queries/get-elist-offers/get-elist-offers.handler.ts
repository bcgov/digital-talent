import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetElistOffersQuery } from './get-elist-offers.query';

@QueryHandler(GetElistOffersQuery)
export class GetElistOffersHandler implements IQueryHandler<GetElistOffersQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ args: { where, orderBy, take, skip } = {} }: GetElistOffersQuery): Promise<any> {
    return this.prisma.elistOffer.findMany({
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
