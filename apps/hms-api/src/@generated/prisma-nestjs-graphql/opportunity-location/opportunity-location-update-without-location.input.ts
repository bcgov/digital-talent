import { Field, InputType } from '@nestjs/graphql';
import { OpportunityUpdateOneRequiredWithoutLocationsNestedInput } from '../opportunity/opportunity-update-one-required-without-locations-nested.input';

@InputType()
export class OpportunityLocationUpdateWithoutLocationInput {
  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OpportunityUpdateOneRequiredWithoutLocationsNestedInput, { nullable: true })
  opportunity?: OpportunityUpdateOneRequiredWithoutLocationsNestedInput;
}
