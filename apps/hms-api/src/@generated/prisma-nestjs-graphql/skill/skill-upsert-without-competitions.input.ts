import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SkillUpdateWithoutCompetitionsInput } from './skill-update-without-competitions.input';
import { SkillCreateWithoutCompetitionsInput } from './skill-create-without-competitions.input';
import { SkillWhereInput } from './skill-where.input';

@InputType()
export class SkillUpsertWithoutCompetitionsInput {
  @Field(() => SkillUpdateWithoutCompetitionsInput, { nullable: false })
  @Type(() => SkillUpdateWithoutCompetitionsInput)
  update!: SkillUpdateWithoutCompetitionsInput;

  @Field(() => SkillCreateWithoutCompetitionsInput, { nullable: false })
  @Type(() => SkillCreateWithoutCompetitionsInput)
  create!: SkillCreateWithoutCompetitionsInput;

  @Field(() => SkillWhereInput, { nullable: true })
  @Type(() => SkillWhereInput)
  where?: SkillWhereInput;
}
