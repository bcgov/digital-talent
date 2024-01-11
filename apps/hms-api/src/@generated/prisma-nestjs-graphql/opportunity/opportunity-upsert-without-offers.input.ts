import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityUpdateWithoutOffersInput } from './opportunity-update-without-offers.input';
import { OpportunityCreateWithoutOffersInput } from './opportunity-create-without-offers.input';
import { OpportunityWhereInput } from './opportunity-where.input';

@InputType()
export class OpportunityUpsertWithoutOffersInput {
  @Field(() => OpportunityUpdateWithoutOffersInput, { nullable: false })
  @Type(() => OpportunityUpdateWithoutOffersInput)
  update!: OpportunityUpdateWithoutOffersInput;

  @Field(() => OpportunityCreateWithoutOffersInput, { nullable: false })
  @Type(() => OpportunityCreateWithoutOffersInput)
  create!: OpportunityCreateWithoutOffersInput;

  @Field(() => OpportunityWhereInput, { nullable: true })
  @Type(() => OpportunityWhereInput)
  where?: OpportunityWhereInput;
}
