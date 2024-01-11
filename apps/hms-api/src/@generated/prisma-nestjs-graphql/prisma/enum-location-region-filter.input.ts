import { Field, InputType } from '@nestjs/graphql';
import { LocationRegion } from './location-region.enum';

@InputType()
export class EnumLocationRegionFilter {
  @Field(() => LocationRegion, { nullable: true })
  equals?: keyof typeof LocationRegion;

  @Field(() => [LocationRegion], { nullable: true })
  in?: Array<keyof typeof LocationRegion>;

  @Field(() => [LocationRegion], { nullable: true })
  notIn?: Array<keyof typeof LocationRegion>;

  @Field(() => EnumLocationRegionFilter, { nullable: true })
  not?: EnumLocationRegionFilter;
}
