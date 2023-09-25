import { Field, InputType } from '@nestjs/graphql';
import { OpportunityUncheckedUpdateManyWithoutMinistryNestedInput } from '../opportunity/opportunity-unchecked-update-many-without-ministry-nested.input';

@InputType()
export class MinistryUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  deltek_id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OpportunityUncheckedUpdateManyWithoutMinistryNestedInput, { nullable: true })
  opportunities?: OpportunityUncheckedUpdateManyWithoutMinistryNestedInput;
}
