import { Field, InputType } from '@nestjs/graphql';
import { LocationUpdateOneRequiredWithoutOpportunitiesNestedInput } from '../location/location-update-one-required-without-opportunities-nested.input';

@InputType()
export class OpportunityLocationUpdateWithoutOpportunityInput {
  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => LocationUpdateOneRequiredWithoutOpportunitiesNestedInput, { nullable: true })
  location?: LocationUpdateOneRequiredWithoutOpportunitiesNestedInput;
}
