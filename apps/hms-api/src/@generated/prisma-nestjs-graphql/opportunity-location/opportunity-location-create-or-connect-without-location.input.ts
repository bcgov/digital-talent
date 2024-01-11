import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunityLocationWhereUniqueInput } from './opportunity-location-where-unique.input';
import { OpportunityLocationCreateWithoutLocationInput } from './opportunity-location-create-without-location.input';

@InputType()
export class OpportunityLocationCreateOrConnectWithoutLocationInput {
  @Field(() => OpportunityLocationWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityLocationWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityLocationWhereUniqueInput, 'opportunity_id_location_id'>;

  @Field(() => OpportunityLocationCreateWithoutLocationInput, { nullable: false })
  @Type(() => OpportunityLocationCreateWithoutLocationInput)
  create!: OpportunityLocationCreateWithoutLocationInput;
}
