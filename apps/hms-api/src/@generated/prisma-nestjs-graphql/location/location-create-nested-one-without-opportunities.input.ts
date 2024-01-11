import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LocationCreateWithoutOpportunitiesInput } from './location-create-without-opportunities.input';
import { LocationCreateOrConnectWithoutOpportunitiesInput } from './location-create-or-connect-without-opportunities.input';
import { LocationWhereUniqueInput } from './location-where-unique.input';

@InputType()
export class LocationCreateNestedOneWithoutOpportunitiesInput {
  @Field(() => LocationCreateWithoutOpportunitiesInput, { nullable: true })
  @Type(() => LocationCreateWithoutOpportunitiesInput)
  create?: LocationCreateWithoutOpportunitiesInput;

  @Field(() => LocationCreateOrConnectWithoutOpportunitiesInput, { nullable: true })
  @Type(() => LocationCreateOrConnectWithoutOpportunitiesInput)
  connectOrCreate?: LocationCreateOrConnectWithoutOpportunitiesInput;

  @Field(() => LocationWhereUniqueInput, { nullable: true })
  @Type(() => LocationWhereUniqueInput)
  connect?: Prisma.AtLeast<LocationWhereUniqueInput, 'id'>;
}
