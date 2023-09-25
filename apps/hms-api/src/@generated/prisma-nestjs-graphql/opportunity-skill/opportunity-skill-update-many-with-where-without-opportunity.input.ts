import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunitySkillScalarWhereInput } from './opportunity-skill-scalar-where.input';
import { OpportunitySkillUpdateManyMutationInput } from './opportunity-skill-update-many-mutation.input';

@InputType()
export class OpportunitySkillUpdateManyWithWhereWithoutOpportunityInput {
  @Field(() => OpportunitySkillScalarWhereInput, { nullable: false })
  @Type(() => OpportunitySkillScalarWhereInput)
  where!: OpportunitySkillScalarWhereInput;

  @Field(() => OpportunitySkillUpdateManyMutationInput, { nullable: false })
  @Type(() => OpportunitySkillUpdateManyMutationInput)
  data!: OpportunitySkillUpdateManyMutationInput;
}
