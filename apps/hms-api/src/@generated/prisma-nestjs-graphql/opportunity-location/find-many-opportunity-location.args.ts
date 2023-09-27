import { Field, ArgsType, HideField, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityLocationWhereInput } from './opportunity-location-where.input';
import { OpportunityLocationOrderByWithRelationInput } from './opportunity-location-order-by-with-relation.input';
import { OpportunityLocationWhereUniqueInput } from './opportunity-location-where-unique.input';
import { OpportunityLocationScalarFieldEnum } from './opportunity-location-scalar-field.enum';

@ArgsType()
export class FindManyOpportunityLocationArgs {
  @Field(() => OpportunityLocationWhereInput, { nullable: true })
  @Type(() => OpportunityLocationWhereInput)
  where?: OpportunityLocationWhereInput;

  @Field(() => [OpportunityLocationOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<OpportunityLocationOrderByWithRelationInput>;

  @HideField()
  cursor?: Prisma.AtLeast<OpportunityLocationWhereUniqueInput, 'opportunity_id_location_id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @HideField()
  distinct?: Array<keyof typeof OpportunityLocationScalarFieldEnum>;
}
