import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityCreateInput } from './opportunity-create.input';

@ArgsType()
export class CreateOneOpportunityArgs {
  @Field(() => OpportunityCreateInput, { nullable: false })
  @Type(() => OpportunityCreateInput)
  data!: OpportunityCreateInput;
}
