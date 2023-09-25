import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityLocationCreateInput } from './opportunity-location-create.input';

@ArgsType()
export class CreateOneOpportunityLocationArgs {
  @Field(() => OpportunityLocationCreateInput, { nullable: false })
  @Type(() => OpportunityLocationCreateInput)
  data!: OpportunityLocationCreateInput;
}
