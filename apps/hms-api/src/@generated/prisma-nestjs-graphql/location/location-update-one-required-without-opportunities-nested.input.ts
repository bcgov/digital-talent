import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LocationCreateWithoutOpportunitiesInput } from './location-create-without-opportunities.input';
import { LocationCreateOrConnectWithoutOpportunitiesInput } from './location-create-or-connect-without-opportunities.input';
import { LocationUpsertWithoutOpportunitiesInput } from './location-upsert-without-opportunities.input';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { LocationUpdateToOneWithWhereWithoutOpportunitiesInput } from './location-update-to-one-with-where-without-opportunities.input';

@InputType()
export class LocationUpdateOneRequiredWithoutOpportunitiesNestedInput {
  @Field(() => LocationCreateWithoutOpportunitiesInput, { nullable: true })
  @Type(() => LocationCreateWithoutOpportunitiesInput)
  create?: LocationCreateWithoutOpportunitiesInput;

  @Field(() => LocationCreateOrConnectWithoutOpportunitiesInput, { nullable: true })
  @Type(() => LocationCreateOrConnectWithoutOpportunitiesInput)
  connectOrCreate?: LocationCreateOrConnectWithoutOpportunitiesInput;

  @Field(() => LocationUpsertWithoutOpportunitiesInput, { nullable: true })
  @Type(() => LocationUpsertWithoutOpportunitiesInput)
  upsert?: LocationUpsertWithoutOpportunitiesInput;

  @Field(() => LocationWhereUniqueInput, { nullable: true })
  @Type(() => LocationWhereUniqueInput)
  connect?: Prisma.AtLeast<LocationWhereUniqueInput, 'id'>;

  @Field(() => LocationUpdateToOneWithWhereWithoutOpportunitiesInput, { nullable: true })
  @Type(() => LocationUpdateToOneWithWhereWithoutOpportunitiesInput)
  update?: LocationUpdateToOneWithWhereWithoutOpportunitiesInput;
}
