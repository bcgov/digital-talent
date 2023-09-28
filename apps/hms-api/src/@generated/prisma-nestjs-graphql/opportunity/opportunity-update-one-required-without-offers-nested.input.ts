import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityCreateWithoutOffersInput } from './opportunity-create-without-offers.input';
import { OpportunityCreateOrConnectWithoutOffersInput } from './opportunity-create-or-connect-without-offers.input';
import { OpportunityUpsertWithoutOffersInput } from './opportunity-upsert-without-offers.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityUpdateToOneWithWhereWithoutOffersInput } from './opportunity-update-to-one-with-where-without-offers.input';

@InputType()
export class OpportunityUpdateOneRequiredWithoutOffersNestedInput {
  @Field(() => OpportunityCreateWithoutOffersInput, { nullable: true })
  @Type(() => OpportunityCreateWithoutOffersInput)
  create?: OpportunityCreateWithoutOffersInput;

  @Field(() => OpportunityCreateOrConnectWithoutOffersInput, { nullable: true })
  @Type(() => OpportunityCreateOrConnectWithoutOffersInput)
  connectOrCreate?: OpportunityCreateOrConnectWithoutOffersInput;

  @Field(() => OpportunityUpsertWithoutOffersInput, { nullable: true })
  @Type(() => OpportunityUpsertWithoutOffersInput)
  upsert?: OpportunityUpsertWithoutOffersInput;

  @Field(() => OpportunityWhereUniqueInput, { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  connect?: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => OpportunityUpdateToOneWithWhereWithoutOffersInput, { nullable: true })
  @Type(() => OpportunityUpdateToOneWithWhereWithoutOffersInput)
  update?: OpportunityUpdateToOneWithWhereWithoutOffersInput;
}
