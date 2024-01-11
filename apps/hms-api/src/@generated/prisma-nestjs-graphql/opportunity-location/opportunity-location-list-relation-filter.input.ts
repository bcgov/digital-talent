import { Field, InputType } from '@nestjs/graphql';
import { OpportunityLocationWhereInput } from './opportunity-location-where.input';

@InputType()
export class OpportunityLocationListRelationFilter {
  @Field(() => OpportunityLocationWhereInput, { nullable: true })
  every?: OpportunityLocationWhereInput;

  @Field(() => OpportunityLocationWhereInput, { nullable: true })
  some?: OpportunityLocationWhereInput;

  @Field(() => OpportunityLocationWhereInput, { nullable: true })
  none?: OpportunityLocationWhereInput;
}
