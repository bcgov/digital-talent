import { Field, InputType } from '@nestjs/graphql';
import { SkillCreateNestedOneWithoutOpportunitiesInput } from '../skill/skill-create-nested-one-without-opportunities.input';

@InputType()
export class OpportunitySkillCreateWithoutOpportunityInput {
  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => SkillCreateNestedOneWithoutOpportunitiesInput, { nullable: false })
  skill!: SkillCreateNestedOneWithoutOpportunitiesInput;
}
