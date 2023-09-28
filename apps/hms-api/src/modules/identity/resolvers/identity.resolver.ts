import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { FindManyIdentityArgs, Identity, User } from '../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { GetUserQuery } from '../../user/queries/get-user/get-user.query';
import { CreateIdentityCommand } from '../commands/create-identity/create-identity.command';
import { DeleteIdentityCommand } from '../commands/delete-identity/delete-identity.command';
import { CreateIdentityInput } from '../inputs/create-identity.input';
import { GetIdentitiesQuery } from '../queries/get-identities/get-identities.query';
import { GetIdentityQuery } from '../queries/get-identity/get-identity.query';

@Resolver((of) => Identity)
export class IdentityResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Mutation((returns) => GraphQLString)
  async createIdentity(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateIdentityInput }) data: CreateIdentityInput,
  ) {
    const { sub, identity_provider, ...restData } = data;
    const command = new CreateIdentityCommand({ sub, identity_provider, ...restData }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.sub;
  }

  @Mutation((returns) => GraphQLString)
  async deleteIdentity(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'sub', type: () => String }) sub: string,
    @Args({ name: 'identity_provider', type: () => String }) identity_provider: string,
  ) {
    const command = new DeleteIdentityCommand({ sub, identity_provider }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.sub;
  }

  @Query((returns) => [Identity])
  async identities(@Args() args?: FindManyIdentityArgs) {
    return this.queryBus.execute(new GetIdentitiesQuery(args));
  }

  @Query((returns) => Identity)
  async identity(
    @Args({ name: 'sub', type: () => String }) sub: string,
    @Args({ name: 'identity_provider', type: () => String }) identity_provider: string,
  ) {
    return this.queryBus.execute(new GetIdentityQuery(sub, identity_provider));
  }

  @ResolveField('user', (returns) => User)
  async user(@Parent() identity: Identity) {
    return this.queryBus.execute(new GetUserQuery(identity.user_id));
  }
}
