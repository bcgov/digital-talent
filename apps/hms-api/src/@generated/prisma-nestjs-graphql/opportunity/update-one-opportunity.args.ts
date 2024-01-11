import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityUpdateInput } from './opportunity-update.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';

@ArgsType()
export class UpdateOneOpportunityArgs {
  @Field(() => OpportunityUpdateInput, { nullable: false })
  @Type(() => OpportunityUpdateInput)
  data!: OpportunityUpdateInput;

  @Field(() => OpportunityWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;
}
