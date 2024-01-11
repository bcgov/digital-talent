import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityScalarWhereInput } from './opportunity-scalar-where.input';
import { OpportunityUpdateManyMutationInput } from './opportunity-update-many-mutation.input';

@InputType()
export class OpportunityUpdateManyWithWhereWithoutHiring_managerInput {
  @Field(() => OpportunityScalarWhereInput, { nullable: false })
  @Type(() => OpportunityScalarWhereInput)
  where!: OpportunityScalarWhereInput;

  @Field(() => OpportunityUpdateManyMutationInput, { nullable: false })
  @Type(() => OpportunityUpdateManyMutationInput)
  data!: OpportunityUpdateManyMutationInput;
}
