import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { CreateSkillCommand } from './commands/create-skill/create-skill.command';
import { UpdateSkillCommand } from './commands/update-skill/update-skill.command';
import { SkillWriteEntity } from './entities/skill-write.entity';
import { CreateSkillInput } from './inputs/create-skill.input';
import { UpdateSkillInput } from './inputs/update-skill.input';
import { DeleteSkillCommand } from './commands/delete-skill/delete-skill.command';
import { PrismaService } from '../prisma/prisma.service';

@Resolver((of) => SkillWriteEntity)
export class SkillResolver {
  constructor(private readonly commandBus: CommandBus, private readonly prisma: PrismaService) {}

  @Mutation((returns) => GraphQLString)
  async createSkill(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateSkillInput }) data: CreateSkillInput,
  ) {
    const { id, ...restData } = data;
    const command = new CreateSkillCommand({ id, ...restData }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async updateSkill(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => UpdateSkillInput }) data: UpdateSkillInput,
  ) {
    const command = new UpdateSkillCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async deleteSkill(@CurrentUser() { id: userId }: Express.User, @Args({ name: 'id', type: () => String }) id: string) {
    const command = new DeleteSkillCommand({ id }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Query((returns) => [SkillWriteEntity])
  async skills() {
    return this.prisma.skill.findMany();
  }

  @Query((returns) => SkillWriteEntity)
  async skill(@Args({ name: 'id', type: () => String }) id: string) {
    return this.prisma.skill.findUnique({
      where: {
        id,
      },
    });
  }
}
