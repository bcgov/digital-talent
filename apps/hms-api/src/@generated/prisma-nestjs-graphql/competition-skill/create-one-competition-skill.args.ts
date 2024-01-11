import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionSkillCreateInput } from './competition-skill-create.input';

@ArgsType()
export class CreateOneCompetitionSkillArgs {
  @Field(() => CompetitionSkillCreateInput, { nullable: false })
  @Type(() => CompetitionSkillCreateInput)
  data!: CompetitionSkillCreateInput;
}
