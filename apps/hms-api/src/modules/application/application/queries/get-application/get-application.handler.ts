import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetApplicationQuery } from './get-application.query';

@QueryHandler(GetApplicationQuery)
export class GetApplicationHandler implements IQueryHandler<GetApplicationQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetApplicationQuery): Promise<any> {
    return this.prisma.application.findUnique({
      where: {
        id: query.id,
      },
    });
  }
}
