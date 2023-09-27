import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { Identity } from '../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateIdentityCommand } from '../commands/create-identity/create-identity.command';
import { DeleteIdentityCommand } from '../commands/delete-identity/delete-identity.command';
import { CreateIdentityInput } from '../inputs/create-identity.input';

@Resolver((of) => Identity)
export class IdentityResolver {
  constructor(private readonly commandBus: CommandBus, private readonly prisma: PrismaService) {}

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
  async identitys() {
    return this.prisma.identity.findMany();
  }

  @Query((returns) => Identity)
  async identity(
    @Args({ name: 'sub', type: () => String }) sub: string,
    @Args({ name: 'identity_provider', type: () => String }) identity_provider: string,
  ) {
    return this.prisma.identity.findUnique({
      where: { sub_identity_provider: { sub, identity_provider } },
    });
  }
}
