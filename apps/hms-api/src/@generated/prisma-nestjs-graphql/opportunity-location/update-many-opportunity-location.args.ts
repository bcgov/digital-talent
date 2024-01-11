import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityLocationUpdateManyMutationInput } from './opportunity-location-update-many-mutation.input';
import { OpportunityLocationWhereInput } from './opportunity-location-where.input';

@ArgsType()
export class UpdateManyOpportunityLocationArgs {
  @Field(() => OpportunityLocationUpdateManyMutationInput, { nullable: false })
  @Type(() => OpportunityLocationUpdateManyMutationInput)
  data!: OpportunityLocationUpdateManyMutationInput;

  @Field(() => OpportunityLocationWhereInput, { nullable: true })
  @Type(() => OpportunityLocationWhereInput)
  where?: OpportunityLocationWhereInput;
}
