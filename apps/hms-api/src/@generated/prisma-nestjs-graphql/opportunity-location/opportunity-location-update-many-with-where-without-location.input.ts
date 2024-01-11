import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityLocationScalarWhereInput } from './opportunity-location-scalar-where.input';
import { OpportunityLocationUpdateManyMutationInput } from './opportunity-location-update-many-mutation.input';

@InputType()
export class OpportunityLocationUpdateManyWithWhereWithoutLocationInput {
  @Field(() => OpportunityLocationScalarWhereInput, { nullable: false })
  @Type(() => OpportunityLocationScalarWhereInput)
  where!: OpportunityLocationScalarWhereInput;

  @Field(() => OpportunityLocationUpdateManyMutationInput, { nullable: false })
  @Type(() => OpportunityLocationUpdateManyMutationInput)
  data!: OpportunityLocationUpdateManyMutationInput;
}
