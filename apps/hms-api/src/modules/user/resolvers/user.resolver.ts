import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { UserModel } from '../models/user.model';
import { GetUserQuery } from '../queries/get-user/get-user.query';
import { GetUsersQuery } from '../queries/get-users/get-users.query';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => [UserModel], { name: 'users' })
  getUsers() {
    return this.queryBus.execute(new GetUsersQuery());
  }

  @Query((returns) => UserModel, { name: 'user' })
  getUser(@Args({ name: 'id', type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetUserQuery(id));
  }
}
