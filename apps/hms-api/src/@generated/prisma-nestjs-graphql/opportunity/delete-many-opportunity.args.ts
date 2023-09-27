import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityWhereInput } from './opportunity-where.input';

@ArgsType()
export class DeleteManyOpportunityArgs {
  @Field(() => OpportunityWhereInput, { nullable: true })
  @Type(() => OpportunityWhereInput)
  where?: OpportunityWhereInput;
}
