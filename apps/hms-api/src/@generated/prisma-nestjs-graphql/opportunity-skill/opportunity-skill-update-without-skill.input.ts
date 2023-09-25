import { Field, InputType } from '@nestjs/graphql';
import { OpportunityUpdateOneWithoutSkillsNestedInput } from '../opportunity/opportunity-update-one-without-skills-nested.input';

@InputType()
export class OpportunitySkillUpdateWithoutSkillInput {
  @Field(() => String, { nullable: true })
  opportunity_id?: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OpportunityUpdateOneWithoutSkillsNestedInput, { nullable: true })
  Opportunity?: OpportunityUpdateOneWithoutSkillsNestedInput;
}
