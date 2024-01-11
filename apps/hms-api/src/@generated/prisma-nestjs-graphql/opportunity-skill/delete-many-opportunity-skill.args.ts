import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunitySkillWhereInput } from './opportunity-skill-where.input';

@ArgsType()
export class DeleteManyOpportunitySkillArgs {
  @Field(() => OpportunitySkillWhereInput, { nullable: true })
  @Type(() => OpportunitySkillWhereInput)
  where?: OpportunitySkillWhereInput;
}
