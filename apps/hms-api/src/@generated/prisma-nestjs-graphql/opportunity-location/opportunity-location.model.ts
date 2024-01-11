import { Field, ObjectType } from '@nestjs/graphql';
import { Location } from '../location/location.model';
import { Opportunity } from '../opportunity/opportunity.model';

@ObjectType()
export class OpportunityLocation {
  @Field(() => String, { nullable: false })
  location_id!: string;

  @Field(() => String, { nullable: false })
  opportunity_id!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => Location, { nullable: false })
  location?: Location;

  @Field(() => Opportunity, { nullable: false })
  opportunity?: Opportunity;
}
