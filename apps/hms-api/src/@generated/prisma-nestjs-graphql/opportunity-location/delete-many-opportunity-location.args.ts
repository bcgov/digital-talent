import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityLocationWhereInput } from './opportunity-location-where.input';

@ArgsType()
export class DeleteManyOpportunityLocationArgs {
  @Field(() => OpportunityLocationWhereInput, { nullable: true })
  @Type(() => OpportunityLocationWhereInput)
  where?: OpportunityLocationWhereInput;
}
