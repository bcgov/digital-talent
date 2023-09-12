import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetCompetitionSchedulesQuery } from './get-competition-schedules.query';

@QueryHandler(GetCompetitionSchedulesQuery)
export class GetCompetitionSchedulesHandler implements IQueryHandler<GetCompetitionSchedulesQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetCompetitionSchedulesQuery): Promise<any> {
    return this.prisma.competitionSchedule.findMany({
      where: {
        deleted_at: null,
        ...(query.args?.where && { ...query.args.where }),
      },
    });
  }
}
