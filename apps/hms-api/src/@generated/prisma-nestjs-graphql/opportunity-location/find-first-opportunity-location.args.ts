import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityLocationWhereInput } from './opportunity-location-where.input';
import { OpportunityLocationOrderByWithRelationInput } from './opportunity-location-order-by-with-relation.input';
import { OpportunityLocationWhereUniqueInput } from './opportunity-location-where-unique.input';
import { OpportunityLocationScalarFieldEnum } from './opportunity-location-scalar-field.enum';

@ArgsType()
export class FindFirstOpportunityLocationArgs {
  @Field(() => OpportunityLocationWhereInput, { nullable: true })
  @Type(() => OpportunityLocationWhereInput)
  where?: OpportunityLocationWhereInput;

  @Field(() => [OpportunityLocationOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<OpportunityLocationOrderByWithRelationInput>;

  @Field(() => OpportunityLocationWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<OpportunityLocationWhereUniqueInput, 'opportunity_id_location_id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [OpportunityLocationScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof OpportunityLocationScalarFieldEnum>;
}
