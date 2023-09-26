import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityWhereInput } from './opportunity-where.input';
import { OpportunityUpdateWithoutOffersInput } from './opportunity-update-without-offers.input';

@InputType()
export class OpportunityUpdateToOneWithWhereWithoutOffersInput {
  @Field(() => OpportunityWhereInput, { nullable: true })
  @Type(() => OpportunityWhereInput)
  where?: OpportunityWhereInput;

  @Field(() => OpportunityUpdateWithoutOffersInput, { nullable: false })
  @Type(() => OpportunityUpdateWithoutOffersInput)
  data!: OpportunityUpdateWithoutOffersInput;
}
