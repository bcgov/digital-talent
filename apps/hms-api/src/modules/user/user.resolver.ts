import { Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { UserEntity } from './entities/user.entity';

@Resolver((of) => UserEntity)
export class UserResolver {
  @Query((returns) => GraphQLString)
  users() {
    return 'Hello, world!';
  }
}
