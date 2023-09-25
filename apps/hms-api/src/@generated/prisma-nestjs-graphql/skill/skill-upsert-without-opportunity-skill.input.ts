import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SkillUpdateWithoutOpportunitySkillInput } from './skill-update-without-opportunity-skill.input';
import { SkillCreateWithoutOpportunitySkillInput } from './skill-create-without-opportunity-skill.input';
import { SkillWhereInput } from './skill-where.input';

@InputType()
export class SkillUpsertWithoutOpportunitySkillInput {
  @Field(() => SkillUpdateWithoutOpportunitySkillInput, { nullable: false })
  @Type(() => SkillUpdateWithoutOpportunitySkillInput)
  update!: SkillUpdateWithoutOpportunitySkillInput;

  @Field(() => SkillCreateWithoutOpportunitySkillInput, { nullable: false })
  @Type(() => SkillCreateWithoutOpportunitySkillInput)
  create!: SkillCreateWithoutOpportunitySkillInput;

  @Field(() => SkillWhereInput, { nullable: true })
  @Type(() => SkillWhereInput)
  where?: SkillWhereInput;
}
