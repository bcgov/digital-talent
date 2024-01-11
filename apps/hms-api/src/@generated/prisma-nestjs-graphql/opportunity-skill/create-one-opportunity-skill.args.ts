import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunitySkillCreateInput } from './opportunity-skill-create.input';

@ArgsType()
export class CreateOneOpportunitySkillArgs {
  @Field(() => OpportunitySkillCreateInput, { nullable: false })
  @Type(() => OpportunitySkillCreateInput)
  data!: OpportunitySkillCreateInput;
}
