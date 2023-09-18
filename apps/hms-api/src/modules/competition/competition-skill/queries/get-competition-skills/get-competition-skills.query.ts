import { Prisma } from '@prisma/client';

interface GetCompetitionSkillsQueryArgs {
  where?: Prisma.CompetitionSkillWhereInput;
}

export class GetCompetitionSkillsQuery {
  constructor(readonly args?: GetCompetitionSkillsQueryArgs) {}
}
