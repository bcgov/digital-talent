import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionSkillCreateManyCompetitionInput } from './competition-skill-create-many-competition.input';

@InputType()
export class CompetitionSkillCreateManyCompetitionInputEnvelope {
  @Field(() => [CompetitionSkillCreateManyCompetitionInput], { nullable: false })
  @Type(() => CompetitionSkillCreateManyCompetitionInput)
  data!: Array<CompetitionSkillCreateManyCompetitionInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
