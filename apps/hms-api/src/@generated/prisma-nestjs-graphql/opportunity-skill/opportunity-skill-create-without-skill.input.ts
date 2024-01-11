import { Field, InputType } from '@nestjs/graphql';
import { OpportunityCreateNestedOneWithoutSkillsInput } from '../opportunity/opportunity-create-nested-one-without-skills.input';

@InputType()
export class OpportunitySkillCreateWithoutSkillInput {
  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OpportunityCreateNestedOneWithoutSkillsInput, { nullable: false })
  opportunity!: OpportunityCreateNestedOneWithoutSkillsInput;
}
