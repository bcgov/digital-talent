import { Field, InputType, Float } from '@nestjs/graphql';
import { LocationRegion } from '../prisma/location-region.enum';
import { ApplicationLocationUpdateManyWithoutLocationNestedInput } from '../application-location/application-location-update-many-without-location-nested.input';
import { OpportunityLocationUpdateManyWithoutLocationNestedInput } from '../opportunity-location/opportunity-location-update-many-without-location-nested.input';

@InputType()
export class LocationUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  deltek_id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  postal_code?: string;

  @Field(() => Float, { nullable: true })
  lat?: number;

  @Field(() => Float, { nullable: true })
  lon?: number;

  @Field(() => LocationRegion, { nullable: true })
  region?: keyof typeof LocationRegion;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ApplicationLocationUpdateManyWithoutLocationNestedInput, { nullable: true })
  applications?: ApplicationLocationUpdateManyWithoutLocationNestedInput;

  @Field(() => OpportunityLocationUpdateManyWithoutLocationNestedInput, { nullable: true })
  opportunities?: OpportunityLocationUpdateManyWithoutLocationNestedInput;
}
