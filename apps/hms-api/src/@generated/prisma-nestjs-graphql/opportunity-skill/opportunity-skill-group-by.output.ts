import { Field, ObjectType } from '@nestjs/graphql';
import { OpportunitySkillCountAggregate } from './opportunity-skill-count-aggregate.output';
import { OpportunitySkillMinAggregate } from './opportunity-skill-min-aggregate.output';
import { OpportunitySkillMaxAggregate } from './opportunity-skill-max-aggregate.output';

@ObjectType()
export class OpportunitySkillGroupBy {
  @Field(() => String, { nullable: false })
  opportunity_id!: string;

  @Field(() => String, { nullable: false })
  skill_id!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OpportunitySkillCountAggregate, { nullable: true })
  _count?: OpportunitySkillCountAggregate;

  @Field(() => OpportunitySkillMinAggregate, { nullable: true })
  _min?: OpportunitySkillMinAggregate;

  @Field(() => OpportunitySkillMaxAggregate, { nullable: true })
  _max?: OpportunitySkillMaxAggregate;
}
