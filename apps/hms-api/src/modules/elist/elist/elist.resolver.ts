import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { CreateElistCommand } from './commands/create-elist/create-elist.command';
import { UpdateElistCommand } from './commands/update-elist/update-elist.command';
import { ElistEntity } from './entities/elist.entity';
import { CreateElistInput } from './inputs/create-elist.input';
import { UpdateElistInput } from './inputs/update-elist.input';
import { PrismaService } from '../../prisma/prisma.service';
import { DeleteElistCommand } from './commands/delete-elist/delete-elist.command';

@Resolver((of) => ElistEntity)
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

  @Query((returns) => [ElistEntity])
  async elists() {
    return this.prisma.elist.findMany();
  }

  @Query((returns) => ElistEntity)
  async elist(@Args('id', { type: () => GraphQLString }) id: string) {
    return this.prisma.elist.findUnique({
      where: { id },
    });
  }
}
