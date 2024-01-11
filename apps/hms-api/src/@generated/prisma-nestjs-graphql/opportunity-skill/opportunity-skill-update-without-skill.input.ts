import { Field, InputType } from '@nestjs/graphql';
import { OpportunityUpdateOneRequiredWithoutSkillsNestedInput } from '../opportunity/opportunity-update-one-required-without-skills-nested.input';

@InputType()
export class OpportunitySkillUpdateWithoutSkillInput {
  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OpportunityUpdateOneRequiredWithoutSkillsNestedInput, { nullable: true })
  opportunity?: OpportunityUpdateOneRequiredWithoutSkillsNestedInput;
}
