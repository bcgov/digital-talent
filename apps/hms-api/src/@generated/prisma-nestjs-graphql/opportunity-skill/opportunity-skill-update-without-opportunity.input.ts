import { Field, InputType } from '@nestjs/graphql';
import { SkillUpdateOneRequiredWithoutOpportunitySkillNestedInput } from '../skill/skill-update-one-required-without-opportunity-skill-nested.input';

@InputType()
export class OpportunitySkillUpdateWithoutOpportunityInput {
  @Field(() => String, { nullable: true })
  opportunity_id?: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => SkillUpdateOneRequiredWithoutOpportunitySkillNestedInput, { nullable: true })
  skill?: SkillUpdateOneRequiredWithoutOpportunitySkillNestedInput;
}
