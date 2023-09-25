import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SkillWhereInput } from './skill-where.input';
import { SkillUpdateWithoutOpportunitySkillInput } from './skill-update-without-opportunity-skill.input';

@InputType()
export class SkillUpdateToOneWithWhereWithoutOpportunitySkillInput {
  @Field(() => SkillWhereInput, { nullable: true })
  @Type(() => SkillWhereInput)
  where?: SkillWhereInput;

  @Field(() => SkillUpdateWithoutOpportunitySkillInput, { nullable: false })
  @Type(() => SkillUpdateWithoutOpportunitySkillInput)
  data!: SkillUpdateWithoutOpportunitySkillInput;
}
