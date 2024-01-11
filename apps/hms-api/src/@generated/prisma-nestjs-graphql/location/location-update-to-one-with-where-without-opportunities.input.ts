import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { LocationWhereInput } from './location-where.input';
import { LocationUpdateWithoutOpportunitiesInput } from './location-update-without-opportunities.input';

@InputType()
export class LocationUpdateToOneWithWhereWithoutOpportunitiesInput {
  @Field(() => LocationWhereInput, { nullable: true })
  @Type(() => LocationWhereInput)
  where?: LocationWhereInput;

  @Field(() => LocationUpdateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => LocationUpdateWithoutOpportunitiesInput)
  data!: LocationUpdateWithoutOpportunitiesInput;
}
