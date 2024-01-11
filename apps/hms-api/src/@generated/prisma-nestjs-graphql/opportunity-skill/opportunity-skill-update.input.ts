import { Field, InputType } from '@nestjs/graphql';
import { OpportunityUpdateOneRequiredWithoutSkillsNestedInput } from '../opportunity/opportunity-update-one-required-without-skills-nested.input';
import { SkillUpdateOneRequiredWithoutOpportunitiesNestedInput } from '../skill/skill-update-one-required-without-opportunities-nested.input';

@InputType()
export class OpportunitySkillUpdateInput {
  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OpportunityUpdateOneRequiredWithoutSkillsNestedInput, { nullable: true })
  opportunity?: OpportunityUpdateOneRequiredWithoutSkillsNestedInput;

  @Field(() => SkillUpdateOneRequiredWithoutOpportunitiesNestedInput, { nullable: true })
  skill?: SkillUpdateOneRequiredWithoutOpportunitiesNestedInput;
}
