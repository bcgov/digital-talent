import { Prisma } from '@prisma/client';

interface GetCompetitionQueryArgs {
  where?: Prisma.CompetitionWhereInput;
}

export class GetCompetitionsQuery {
  // where?: Prisma.Args<typeof this.prisma.user, 'findMany'>;
  where?: Prisma.CompetitionWhereInput;

  constructor(args: GetCompetitionQueryArgs = {}) {
    const { where } = args;

    this.where = where;
  }
}
