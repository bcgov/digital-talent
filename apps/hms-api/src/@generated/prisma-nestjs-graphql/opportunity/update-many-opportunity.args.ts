import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityUpdateManyMutationInput } from './opportunity-update-many-mutation.input';
import { OpportunityWhereInput } from './opportunity-where.input';

@ArgsType()
export class UpdateManyOpportunityArgs {
  @Field(() => OpportunityUpdateManyMutationInput, { nullable: false })
  @Type(() => OpportunityUpdateManyMutationInput)
  data!: OpportunityUpdateManyMutationInput;

  @Field(() => OpportunityWhereInput, { nullable: true })
  @Type(() => OpportunityWhereInput)
  where?: OpportunityWhereInput;
}
