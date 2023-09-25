import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionSkillCreateManySkillInput } from './competition-skill-create-many-skill.input';

@InputType()
export class CompetitionSkillCreateManySkillInputEnvelope {
  @Field(() => [CompetitionSkillCreateManySkillInput], { nullable: false })
  @Type(() => CompetitionSkillCreateManySkillInput)
  data!: Array<CompetitionSkillCreateManySkillInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
