import { Field, InputType } from '@nestjs/graphql';
import { OpportunityCreateNestedOneWithoutSkillsInput } from '../opportunity/opportunity-create-nested-one-without-skills.input';
import { SkillCreateNestedOneWithoutOpportunitiesInput } from '../skill/skill-create-nested-one-without-opportunities.input';

@InputType()
export class OpportunitySkillCreateInput {
  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OpportunityCreateNestedOneWithoutSkillsInput, { nullable: true })
  opportunity?: OpportunityCreateNestedOneWithoutSkillsInput;

  @Field(() => SkillCreateNestedOneWithoutOpportunitiesInput, { nullable: false })
  skill!: SkillCreateNestedOneWithoutOpportunitiesInput;
}
