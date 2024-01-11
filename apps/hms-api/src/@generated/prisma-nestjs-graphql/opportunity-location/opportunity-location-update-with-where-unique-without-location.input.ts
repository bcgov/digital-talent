import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunityLocationWhereUniqueInput } from './opportunity-location-where-unique.input';
import { OpportunityLocationUpdateWithoutLocationInput } from './opportunity-location-update-without-location.input';

@InputType()
export class OpportunityLocationUpdateWithWhereUniqueWithoutLocationInput {
  @Field(() => OpportunityLocationWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityLocationWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityLocationWhereUniqueInput, 'opportunity_id_location_id'>;

  @Field(() => OpportunityLocationUpdateWithoutLocationInput, { nullable: false })
  @Type(() => OpportunityLocationUpdateWithoutLocationInput)
  data!: OpportunityLocationUpdateWithoutLocationInput;
}
