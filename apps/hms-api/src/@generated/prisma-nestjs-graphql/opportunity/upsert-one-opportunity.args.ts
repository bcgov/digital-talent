import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityCreateInput } from './opportunity-create.input';
import { OpportunityUpdateInput } from './opportunity-update.input';

@ArgsType()
export class UpsertOneOpportunityArgs {
  @Field(() => OpportunityWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => OpportunityCreateInput, { nullable: false })
  @Type(() => OpportunityCreateInput)
  create!: OpportunityCreateInput;

  @Field(() => OpportunityUpdateInput, { nullable: false })
  @Type(() => OpportunityUpdateInput)
  update!: OpportunityUpdateInput;
}
