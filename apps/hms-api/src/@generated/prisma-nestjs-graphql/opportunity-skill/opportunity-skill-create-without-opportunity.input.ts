import { Field, InputType } from '@nestjs/graphql';
import { SkillCreateNestedOneWithoutOpportunitySkillInput } from '../skill/skill-create-nested-one-without-opportunity-skill.input';

@InputType()
export class OpportunitySkillCreateWithoutOpportunityInput {
  @Field(() => String, { nullable: false })
  opportunity_id!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => SkillCreateNestedOneWithoutOpportunitySkillInput, { nullable: false })
  skill!: SkillCreateNestedOneWithoutOpportunitySkillInput;
}
