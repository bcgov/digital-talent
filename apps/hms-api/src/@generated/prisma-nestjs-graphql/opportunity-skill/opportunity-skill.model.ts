import { Field, ObjectType } from '@nestjs/graphql';
import { Opportunity } from '../opportunity/opportunity.model';
import { Skill } from '../skill/skill.model';

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

  @Field(() => Opportunity, { nullable: true })
  opportunity?: Opportunity | null;

  @Field(() => Skill, { nullable: false })
  skill?: Skill;
}
