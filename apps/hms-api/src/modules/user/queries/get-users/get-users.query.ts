import { Prisma } from '@prisma/client';

interface GetUserQueryArgs {
  where?: Prisma.UserWhereInput;
}

export class GetUsersQuery {
  // where?: Prisma.Args<typeof this.prisma.user, 'findMany'>;
  where?: Prisma.UserWhereInput;

  constructor(args: GetUserQueryArgs = {}) {
    const { where } = args;

    this.where = where;
  }
}
