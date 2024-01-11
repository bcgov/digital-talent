import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetCompetitionScheduleQuery } from './get-competition-schedule.query';

@QueryHandler(GetCompetitionScheduleQuery)
export class GetCompetitionScheduleHandler implements IQueryHandler<GetCompetitionScheduleQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetCompetitionScheduleQuery): Promise<any> {
    return this.prisma.competitionSchedule.findUnique({ where: { id: query.id } });
  }
}
