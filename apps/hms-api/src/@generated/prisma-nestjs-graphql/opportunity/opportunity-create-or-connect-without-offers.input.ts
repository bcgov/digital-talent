import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityCreateWithoutOffersInput } from './opportunity-create-without-offers.input';

@InputType()
export class OpportunityCreateOrConnectWithoutOffersInput {
  @Field(() => OpportunityWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => OpportunityCreateWithoutOffersInput, { nullable: false })
  @Type(() => OpportunityCreateWithoutOffersInput)
  create!: OpportunityCreateWithoutOffersInput;
}
