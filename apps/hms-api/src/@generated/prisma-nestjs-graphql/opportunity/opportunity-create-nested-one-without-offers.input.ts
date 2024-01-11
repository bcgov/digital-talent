import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityCreateWithoutOffersInput } from './opportunity-create-without-offers.input';
import { OpportunityCreateOrConnectWithoutOffersInput } from './opportunity-create-or-connect-without-offers.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';

@InputType()
export class OpportunityCreateNestedOneWithoutOffersInput {
  @Field(() => OpportunityCreateWithoutOffersInput, { nullable: true })
  @Type(() => OpportunityCreateWithoutOffersInput)
  create?: OpportunityCreateWithoutOffersInput;

  @Field(() => OpportunityCreateOrConnectWithoutOffersInput, { nullable: true })
  @Type(() => OpportunityCreateOrConnectWithoutOffersInput)
  connectOrCreate?: OpportunityCreateOrConnectWithoutOffersInput;

  @Field(() => OpportunityWhereUniqueInput, { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  connect?: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;
}
