import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { CreateSkillCommand } from '../commands/create-skill/create-skill.command';
import { DeleteSkillCommand } from '../commands/delete-skill/delete-skill.command';
import { UpdateSkillCommand } from '../commands/update-skill/update-skill.command';
import { CreateSkillInput } from '../inputs/create-skill.input';
import { UpdateSkillInput } from '../inputs/update-skill.input';
import { SkillModel } from '../models/skill.model';
import { GetSkillQuery } from '../queries/get-skill/get-skill.query';
import { GetSkillsQuery } from '../queries/get-skills/get-skills.query';

@Resolver((of) => SkillModel)
export class SkillResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

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

  @Query((returns) => [SkillModel])
  async skills() {
    return this.queryBus.execute(new GetSkillsQuery());
  }

  @Query((returns) => SkillModel)
  async skill(@Args({ name: 'id', type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetSkillQuery(id));
  }
}
