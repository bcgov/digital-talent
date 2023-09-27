import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityWhereInput } from './opportunity-where.input';
import { OpportunityOrderByWithRelationInput } from './opportunity-order-by-with-relation.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityScalarFieldEnum } from './opportunity-scalar-field.enum';

@ArgsType()
export class FindFirstOpportunityArgs {
  @Field(() => OpportunityWhereInput, { nullable: true })
  @Type(() => OpportunityWhereInput)
  where?: OpportunityWhereInput;

  @Field(() => [OpportunityOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<OpportunityOrderByWithRelationInput>;

  @Field(() => OpportunityWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [OpportunityScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof OpportunityScalarFieldEnum>;
}
