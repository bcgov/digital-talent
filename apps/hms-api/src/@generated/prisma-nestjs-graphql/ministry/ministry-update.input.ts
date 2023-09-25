import { Field, InputType } from '@nestjs/graphql';
import { OpportunityUpdateManyWithoutMinistryNestedInput } from '../opportunity/opportunity-update-many-without-ministry-nested.input';

@InputType()
export class MinistryUpdateInput {
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

  @Field(() => OpportunityUpdateManyWithoutMinistryNestedInput, { nullable: true })
  opportunities?: OpportunityUpdateManyWithoutMinistryNestedInput;
}
