import { Field, InputType } from '@nestjs/graphql';
import { LocationCreateNestedOneWithoutOpportunitiesInput } from '../location/location-create-nested-one-without-opportunities.input';

@InputType()
export class OpportunityLocationCreateWithoutOpportunityInput {
  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => LocationCreateNestedOneWithoutOpportunitiesInput, { nullable: false })
  location!: LocationCreateNestedOneWithoutOpportunitiesInput;
}
