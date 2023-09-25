import { Field, ObjectType } from '@nestjs/graphql';
import { Skill } from '../skill/skill.model';
import { Opportunity } from '../opportunity/opportunity.model';

@ObjectType()
export class OpportunitySkill {
  @Field(() => String, { nullable: false })
  opportunity_id!: string;

  @Field(() => String, { nullable: false })
  skill_id!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => String, { nullable: true })
  opportunityId!: string | null;

  @Field(() => Skill, { nullable: false })
  skill?: Skill;

  @Field(() => Opportunity, { nullable: true })
  Opportunity?: Opportunity | null;
}
