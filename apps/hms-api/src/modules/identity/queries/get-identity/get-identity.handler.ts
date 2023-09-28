import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetIdentityQuery } from './get-identity.query';

@QueryHandler(GetIdentityQuery)
export class GetIdentityHandler implements IQueryHandler<GetIdentityQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetIdentityQuery): Promise<any> {
    return this.prisma.identity.findUnique({
      where: {
        sub_identity_provider: {
          sub: query.sub,
          identity_provider: query.identity_provider,
        },
      },
    });
  }
}
