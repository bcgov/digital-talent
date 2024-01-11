import { Field, InputType } from '@nestjs/graphql';
import { OpportunityCreateNestedOneWithoutLocationsInput } from '../opportunity/opportunity-create-nested-one-without-locations.input';

@InputType()
export class OpportunityLocationCreateWithoutLocationInput {
  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OpportunityCreateNestedOneWithoutLocationsInput, { nullable: false })
  opportunity!: OpportunityCreateNestedOneWithoutLocationsInput;
}
