import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { Roles } from '../../auth/decorators/roles.decorator';
import { HiringManagerModel } from '../models/hiring-manager.model';
import { RecruiterModel } from '../models/recruiter.model';
import { UserModel } from '../models/user.model';
import { GetUserQuery } from '../queries/get-user/get-user.query';
import { GetUsersQuery } from '../queries/get-users/get-users.query';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Roles('admin', 'recruiter')
  @Query((returns) => [UserModel], { name: 'users' })
  getUsers() {
    return this.queryBus.execute(new GetUsersQuery());
  }

  @Roles('admin', 'recruiter')
  @Query((returns) => [HiringManagerModel], { name: 'hiringManagers' })
  getHiringManagers() {
    return this.queryBus.execute(new GetUsersQuery({ where: { roles: { hasEvery: ['hiring-manager'] } } }));
  }

  @Roles('admin', 'recruiter')
  @Query((returns) => [RecruiterModel], { name: 'recruiters' })
  getRecruiters() {
    return this.queryBus.execute(new GetUsersQuery({ where: { roles: { hasEvery: ['recruiter'] } } }));
  }

  @Query((returns) => UserModel, { name: 'user' })
  getUser(@Args({ name: 'id', type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetUserQuery(id));
  }
}
