import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionWhereInput } from './competition-where.input';
import { CompetitionUpdateWithoutSkillsInput } from './competition-update-without-skills.input';

@InputType()
export class CompetitionUpdateToOneWithWhereWithoutSkillsInput {
  @Field(() => CompetitionWhereInput, { nullable: true })
  @Type(() => CompetitionWhereInput)
  where?: CompetitionWhereInput;

  @Field(() => CompetitionUpdateWithoutSkillsInput, { nullable: false })
  @Type(() => CompetitionUpdateWithoutSkillsInput)
  data!: CompetitionUpdateWithoutSkillsInput;
}
