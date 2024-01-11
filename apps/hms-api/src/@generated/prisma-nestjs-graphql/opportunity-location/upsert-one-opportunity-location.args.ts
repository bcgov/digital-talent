import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunityLocationWhereUniqueInput } from './opportunity-location-where-unique.input';
import { OpportunityLocationCreateInput } from './opportunity-location-create.input';
import { OpportunityLocationUpdateInput } from './opportunity-location-update.input';

@ArgsType()
export class UpsertOneOpportunityLocationArgs {
  @Field(() => OpportunityLocationWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityLocationWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityLocationWhereUniqueInput, 'opportunity_id_location_id'>;

  @Field(() => OpportunityLocationCreateInput, { nullable: false })
  @Type(() => OpportunityLocationCreateInput)
  create!: OpportunityLocationCreateInput;

  @Field(() => OpportunityLocationUpdateInput, { nullable: false })
  @Type(() => OpportunityLocationUpdateInput)
  update!: OpportunityLocationUpdateInput;
}
