import { Field, InputType } from '@nestjs/graphql';
import { OpportunitySkillWhereInput } from './opportunity-skill-where.input';

@InputType()
export class OpportunitySkillListRelationFilter {
  @Field(() => OpportunitySkillWhereInput, { nullable: true })
  every?: OpportunitySkillWhereInput;

  @Field(() => OpportunitySkillWhereInput, { nullable: true })
  some?: OpportunitySkillWhereInput;

  @Field(() => OpportunitySkillWhereInput, { nullable: true })
  none?: OpportunitySkillWhereInput;
}
