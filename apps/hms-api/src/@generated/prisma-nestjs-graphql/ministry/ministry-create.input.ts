import { Field, InputType } from '@nestjs/graphql';
import { OpportunityCreateNestedManyWithoutMinistryInput } from '../opportunity/opportunity-create-nested-many-without-ministry.input';

@InputType()
export class MinistryCreateInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  deltek_id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OpportunityCreateNestedManyWithoutMinistryInput, { nullable: true })
  opportunities?: OpportunityCreateNestedManyWithoutMinistryInput;
}
