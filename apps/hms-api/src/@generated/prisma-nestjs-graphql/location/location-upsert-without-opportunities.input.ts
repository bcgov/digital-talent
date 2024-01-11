import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { LocationUpdateWithoutOpportunitiesInput } from './location-update-without-opportunities.input';
import { LocationCreateWithoutOpportunitiesInput } from './location-create-without-opportunities.input';
import { LocationWhereInput } from './location-where.input';

@InputType()
export class LocationUpsertWithoutOpportunitiesInput {
  @Field(() => LocationUpdateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => LocationUpdateWithoutOpportunitiesInput)
  update!: LocationUpdateWithoutOpportunitiesInput;

  @Field(() => LocationCreateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => LocationCreateWithoutOpportunitiesInput)
  create!: LocationCreateWithoutOpportunitiesInput;

  @Field(() => LocationWhereInput, { nullable: true })
  @Type(() => LocationWhereInput)
  where?: LocationWhereInput;
}
