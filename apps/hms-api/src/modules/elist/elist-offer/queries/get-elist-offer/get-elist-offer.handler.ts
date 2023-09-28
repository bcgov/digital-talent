import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetElistOfferQuery } from './get-elist-offer.query';

@QueryHandler(GetElistOfferQuery)
export class GetElistOfferHandler implements IQueryHandler<GetElistOfferQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetElistOfferQuery): Promise<any> {
    return this.prisma.elistOffer.findUnique({ where: { id: query.id } });
  }
}
