import { Field, InputType } from '@nestjs/graphql';
import { LocationRegion } from './location-region.enum';
import { IntFilter } from './int-filter.input';
import { EnumLocationRegionFilter } from './enum-location-region-filter.input';

@InputType()
export class EnumLocationRegionWithAggregatesFilter {
  @Field(() => LocationRegion, { nullable: true })
  equals?: keyof typeof LocationRegion;

  @Field(() => [LocationRegion], { nullable: true })
  in?: Array<keyof typeof LocationRegion>;

  @Field(() => [LocationRegion], { nullable: true })
  notIn?: Array<keyof typeof LocationRegion>;

  @Field(() => EnumLocationRegionWithAggregatesFilter, { nullable: true })
  not?: EnumLocationRegionWithAggregatesFilter;

  @Field(() => IntFilter, { nullable: true })
  _count?: IntFilter;

  @Field(() => EnumLocationRegionFilter, { nullable: true })
  _min?: EnumLocationRegionFilter;

  @Field(() => EnumLocationRegionFilter, { nullable: true })
  _max?: EnumLocationRegionFilter;
}
