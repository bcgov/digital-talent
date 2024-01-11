import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionUpdateWithoutSkillsInput } from './competition-update-without-skills.input';
import { CompetitionCreateWithoutSkillsInput } from './competition-create-without-skills.input';
import { CompetitionWhereInput } from './competition-where.input';

@InputType()
export class CompetitionUpsertWithoutSkillsInput {
  @Field(() => CompetitionUpdateWithoutSkillsInput, { nullable: false })
  @Type(() => CompetitionUpdateWithoutSkillsInput)
  update!: CompetitionUpdateWithoutSkillsInput;

  @Field(() => CompetitionCreateWithoutSkillsInput, { nullable: false })
  @Type(() => CompetitionCreateWithoutSkillsInput)
  create!: CompetitionCreateWithoutSkillsInput;

  @Field(() => CompetitionWhereInput, { nullable: true })
  @Type(() => CompetitionWhereInput)
  where?: CompetitionWhereInput;
}
