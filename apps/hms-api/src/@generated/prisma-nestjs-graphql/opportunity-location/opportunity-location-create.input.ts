import { Field, InputType } from '@nestjs/graphql';
import { LocationCreateNestedOneWithoutOpportunitiesInput } from '../location/location-create-nested-one-without-opportunities.input';
import { OpportunityCreateNestedOneWithoutLocationsInput } from '../opportunity/opportunity-create-nested-one-without-locations.input';

@InputType()
export class OpportunityLocationCreateInput {
  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => LocationCreateNestedOneWithoutOpportunitiesInput, { nullable: false })
  location!: LocationCreateNestedOneWithoutOpportunitiesInput;

  @Field(() => OpportunityCreateNestedOneWithoutLocationsInput, { nullable: false })
  opportunity!: OpportunityCreateNestedOneWithoutLocationsInput;
}
