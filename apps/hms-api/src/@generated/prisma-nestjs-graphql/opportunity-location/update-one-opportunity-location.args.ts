import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityLocationUpdateInput } from './opportunity-location-update.input';
import { OpportunityLocationWhereUniqueInput } from './opportunity-location-where-unique.input';

@ArgsType()
export class UpdateOneOpportunityLocationArgs {
  @Field(() => OpportunityLocationUpdateInput, { nullable: false })
  @Type(() => OpportunityLocationUpdateInput)
  data!: OpportunityLocationUpdateInput;

  @Field(() => OpportunityLocationWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityLocationWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityLocationWhereUniqueInput, 'opportunity_id_location_id'>;
}
