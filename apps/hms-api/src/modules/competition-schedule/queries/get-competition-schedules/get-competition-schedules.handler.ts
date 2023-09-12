import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetCompetitionSchedulesQuery } from './get-competition-schedules.query';

@QueryHandler(GetCompetitionSchedulesQuery)
export class GetCompetitionSchedulesHandler implements IQueryHandler<GetCompetitionSchedulesHandler> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetCompetitionSchedulesHandler): Promise<any> {
    return this.prisma.competitionSchedule.findMany({
      where: {
        deleted_at: null,
      },
    });
  }
}
