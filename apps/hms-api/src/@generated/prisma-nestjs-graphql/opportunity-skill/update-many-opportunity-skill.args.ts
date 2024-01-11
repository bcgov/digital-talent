import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunitySkillUpdateManyMutationInput } from './opportunity-skill-update-many-mutation.input';
import { OpportunitySkillWhereInput } from './opportunity-skill-where.input';

@ArgsType()
export class UpdateManyOpportunitySkillArgs {
  @Field(() => OpportunitySkillUpdateManyMutationInput, { nullable: false })
  @Type(() => OpportunitySkillUpdateManyMutationInput)
  data!: OpportunitySkillUpdateManyMutationInput;

  @Field(() => OpportunitySkillWhereInput, { nullable: true })
  @Type(() => OpportunitySkillWhereInput)
  where?: OpportunitySkillWhereInput;
}
