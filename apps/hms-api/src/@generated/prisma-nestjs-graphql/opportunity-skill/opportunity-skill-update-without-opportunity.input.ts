import { Field, InputType } from '@nestjs/graphql';
import { SkillUpdateOneRequiredWithoutOpportunitiesNestedInput } from '../skill/skill-update-one-required-without-opportunities-nested.input';

@InputType()
export class OpportunitySkillUpdateWithoutOpportunityInput {
  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => SkillUpdateOneRequiredWithoutOpportunitiesNestedInput, { nullable: true })
  skill?: SkillUpdateOneRequiredWithoutOpportunitiesNestedInput;
}
