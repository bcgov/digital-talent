import { Field, ObjectType, ID, Float } from '@nestjs/graphql';
import { LocationRegion } from '../prisma/location-region.enum';
import { ApplicationLocation } from '../application-location/application-location.model';
import { OpportunityLocation } from '../opportunity-location/opportunity-location.model';

@ObjectType()
export class Location {
  @Field(() => ID, { nullable: false })
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
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => [ApplicationLocation], { nullable: true })
  applications?: Array<ApplicationLocation>;

  @Field(() => [OpportunityLocation], { nullable: true })
  opportunities?: Array<OpportunityLocation>;
}
