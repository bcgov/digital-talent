import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { ApplicationSkill } from '../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateApplicationSkillCommand } from './commands/create-application-skill/create-application-skill.command';
import { DeleteApplicationSkillCommand } from './commands/delete-application-skill/delete-application-skill.command';
import { UpdateApplicationSkillCommand } from './commands/update-application-skill/update-application-skill.command';
import { CreateApplicationSkillInput } from './inputs/create-application-skill.input';
import { UpdateApplicationSkillInput } from './inputs/update-application-skill.input';

@Resolver((of) => ApplicationSkill)
export class ApplicationSkillResolver {
  constructor(private readonly commandBus: CommandBus, private readonly prisma: PrismaService) {}

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
  async applicationSkills() {
    return this.prisma.applicationSkill.findMany();
  }

  @Query((returns) => ApplicationSkill)
  async applicationSkill(
    @Args({ name: 'application_id', type: () => String }) application_id: string,
    @Args({ name: 'skill_id', type: () => String }) skill_id: string,
  ) {
    return this.prisma.applicationSkill.findUnique({
      where: {
        application_id_skill_id: {
          application_id,
          skill_id,
        },
      },
    });
  }
}
