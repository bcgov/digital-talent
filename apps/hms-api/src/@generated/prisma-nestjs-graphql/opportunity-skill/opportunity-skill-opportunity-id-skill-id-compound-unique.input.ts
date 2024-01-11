import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class OpportunitySkillOpportunity_idSkill_idCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  opportunity_id!: string;

  @Field(() => String, { nullable: false })
  skill_id!: string;
}
