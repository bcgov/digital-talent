import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionSkillCreateManyInput } from './competition-skill-create-many.input';

@ArgsType()
export class CreateManyCompetitionSkillArgs {
  @Field(() => [CompetitionSkillCreateManyInput], { nullable: false })
  @Type(() => CompetitionSkillCreateManyInput)
  data!: Array<CompetitionSkillCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
