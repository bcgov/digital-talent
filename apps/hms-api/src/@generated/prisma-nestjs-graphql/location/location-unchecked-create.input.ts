import { Field, InputType, Float } from '@nestjs/graphql';
import { LocationRegion } from '../prisma/location-region.enum';
import { ApplicationLocationUncheckedCreateNestedManyWithoutLocationInput } from '../application-location/application-location-unchecked-create-nested-many-without-location.input';
import { OpportunityLocationUncheckedCreateNestedManyWithoutLocationInput } from '../opportunity-location/opportunity-location-unchecked-create-nested-many-without-location.input';

@InputType()
export class LocationUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  deltek_id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  postal_code!: string;

  @Field(() => Float, { nullable: false })
  lat!: number;

  @Field(() => Float, { nullable: false })
  lon!: number;

  @Field(() => LocationRegion, { nullable: false })
  region!: keyof typeof LocationRegion;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ApplicationLocationUncheckedCreateNestedManyWithoutLocationInput, { nullable: true })
  applications?: ApplicationLocationUncheckedCreateNestedManyWithoutLocationInput;

  @Field(() => OpportunityLocationUncheckedCreateNestedManyWithoutLocationInput, { nullable: true })
  opportunities?: OpportunityLocationUncheckedCreateNestedManyWithoutLocationInput;
}
