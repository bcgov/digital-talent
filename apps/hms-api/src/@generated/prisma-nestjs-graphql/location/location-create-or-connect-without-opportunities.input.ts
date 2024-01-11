import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { LocationCreateWithoutOpportunitiesInput } from './location-create-without-opportunities.input';

@InputType()
export class LocationCreateOrConnectWithoutOpportunitiesInput {
  @Field(() => LocationWhereUniqueInput, { nullable: false })
  @Type(() => LocationWhereUniqueInput)
  where!: Prisma.AtLeast<LocationWhereUniqueInput, 'id'>;

  @Field(() => LocationCreateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => LocationCreateWithoutOpportunitiesInput)
  create!: LocationCreateWithoutOpportunitiesInput;
}
