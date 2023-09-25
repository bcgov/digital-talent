import { Field, InputType } from '@nestjs/graphql';
import { LocationUpdateOneRequiredWithoutOpportunitiesNestedInput } from '../location/location-update-one-required-without-opportunities-nested.input';
import { OpportunityUpdateOneRequiredWithoutLocationsNestedInput } from '../opportunity/opportunity-update-one-required-without-locations-nested.input';

@InputType()
export class OpportunityLocationUpdateInput {
  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => LocationUpdateOneRequiredWithoutOpportunitiesNestedInput, { nullable: true })
  location?: LocationUpdateOneRequiredWithoutOpportunitiesNestedInput;

  @Field(() => OpportunityUpdateOneRequiredWithoutLocationsNestedInput, { nullable: true })
  opportunity?: OpportunityUpdateOneRequiredWithoutLocationsNestedInput;
}
