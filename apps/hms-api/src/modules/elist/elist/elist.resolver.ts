import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { Elist } from '../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateElistCommand } from './commands/create-elist/create-elist.command';
import { DeleteElistCommand } from './commands/delete-elist/delete-elist.command';
import { UpdateElistCommand } from './commands/update-elist/update-elist.command';
import { CreateElistInput } from './inputs/create-elist.input';
import { UpdateElistInput } from './inputs/update-elist.input';

@Resolver((of) => Elist)
export class ElistResolver {
  constructor(private readonly commandBus: CommandBus, private readonly prisma: PrismaService) {}

  @Mutation((returns) => GraphQLString)
  async createElist(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateElistInput }) data: CreateElistInput,
  ) {
    const { id, ...restData } = data;
    const command = new CreateElistCommand({ id, applicant_id: userId, ...restData }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async updateElist(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => UpdateElistInput }) data: UpdateElistInput,
  ) {
    const command = new UpdateElistCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async deleteElist(@CurrentUser() { id: userId }: Express.User, @Args({ name: 'id', type: () => String }) id: string) {
    const command = new DeleteElistCommand({ id }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Query((returns) => [Elist])
  async elists() {
    return this.prisma.elist.findMany();
  }

  @Query((returns) => Elist)
  async elist(@Args('id', { type: () => GraphQLString }) id: string) {
    return this.prisma.elist.findUnique({
      where: { id },
    });
  }
}
