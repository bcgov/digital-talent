import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { FindManyUserArgs, User } from '../../../@generated/prisma-nestjs-graphql';
import { Roles } from '../../auth/decorators/roles.decorator';
import { GetUserQuery } from '../queries/get-user/get-user.query';
import { GetUsersQuery } from '../queries/get-users/get-users.query';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Roles('admin', 'recruiter')
  @Query((returns) => [User], { name: 'users' })
  getUsers(@Args() args?: FindManyUserArgs) {
    return this.queryBus.execute(new GetUsersQuery(args));
  }

  @Roles('admin', 'recruiter')
  @Query((returns) => [User], { name: 'hiringManagers' })
  getHiringManagers(@Args() args?: FindManyUserArgs) {
    return this.queryBus.execute(
      new GetUsersQuery({ ...args, ...{ where: { roles: { hasEvery: ['hiring-manager'] } } } }),
    );
  }

  @Roles('admin', 'recruiter')
  @Query((returns) => [User], { name: 'recruiters' })
  getRecruiters(@Args() args?: FindManyUserArgs) {
    return this.queryBus.execute(new GetUsersQuery({ ...args, ...{ where: { roles: { hasEvery: ['recruiter'] } } } }));
  }

  @Query((returns) => User, { name: 'user' })
  getUser(@Args({ name: 'id', type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetUserQuery(id));
  }
}
