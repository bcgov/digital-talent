import { Prisma } from '@prisma/client';

interface GetCompetitionSchedulesQueryArgs {
  where?: Prisma.CompetitionScheduleWhereInput;
}

export class GetCompetitionSchedulesQuery {
  constructor(readonly args?: GetCompetitionSchedulesQueryArgs) {}
}
