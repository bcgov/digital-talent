import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import {
  Application,
  ApplicationSkill,
  FindManyApplicationSkillArgs,
  Skill,
} from '../../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { GetSkillQuery } from '../../../skill/queries/get-skill/get-skill.query';
import { GetApplicationQuery } from '../../application/queries/get-application/get-application.query';
import { CreateApplicationSkillCommand } from '../commands/create-application-skill/create-application-skill.command';
import { DeleteApplicationSkillCommand } from '../commands/delete-application-skill/delete-application-skill.command';
import { UpdateApplicationSkillCommand } from '../commands/update-application-skill/update-application-skill.command';
import { CreateApplicationSkillInput } from '../inputs/create-application-skill.input';
import { UpdateApplicationSkillInput } from '../inputs/update-application-skill.input';
import { GetApplicationSkillQuery } from '../queries/get-application-skill/get-application-skill.query';
import { GetApplicationSkillsQuery } from '../queries/get-application-skills/get-application-skills.query';

@Resolver((of) => ApplicationSkill)
export class ApplicationSkillResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Mutation((returns) => GraphQLString)
  async createApplicationSkill(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateApplicationSkillInput }) data: CreateApplicationSkillInput,
  ) {
    const { application_id, skill_id, ...restData } = data;
    const command = new CreateApplicationSkillCommand(
      { application_id, skill_id, ...restData },
      { created_by: userId },
    );
    await this.commandBus.execute(command);

    return command.data.application_id;
  }

  @Mutation((returns) => GraphQLString)
  async updateApplicationSkill(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => UpdateApplicationSkillInput }) data: UpdateApplicationSkillInput,
  ) {
    const command = new UpdateApplicationSkillCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.application_id;
  }

  @Mutation((returns) => GraphQLString)
  async deleteApplicationSkill(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'application_id', type: () => String }) application_id: string,
    @Args({ name: 'skill_id', type: () => String }) skill_id: string,
  ) {
    const command = new DeleteApplicationSkillCommand({ application_id, skill_id }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.application_id;
  }

  @Query((returns) => [ApplicationSkill])
  async applicationSkills(@Args() args?: FindManyApplicationSkillArgs) {
    return this.queryBus.execute(new GetApplicationSkillsQuery(args));
  }

  @Query((returns) => ApplicationSkill)
  async applicationSkill(
    @Args({ name: 'application_id', type: () => String }) application_id: string,
    @Args({ name: 'skill_id', type: () => String }) skill_id: string,
  ) {
    return this.queryBus.execute(new GetApplicationSkillQuery(application_id, skill_id));
  }

  @ResolveField('application', (returns) => Application)
  async application(@Parent() applicationSkill: ApplicationSkill) {
    return this.queryBus.execute(new GetApplicationQuery(applicationSkill.application_id));
  }

  @ResolveField('skill', (returns) => Skill)
  async skill(@Parent() applicationSkill: ApplicationSkill) {
    return this.queryBus.execute(new GetSkillQuery(applicationSkill.skill_id));
  }
}
