import { Field, ObjectType } from '@nestjs/graphql';
import { ApplicationSkillCountAggregate } from './application-skill-count-aggregate.output';
import { ApplicationSkillAvgAggregate } from './application-skill-avg-aggregate.output';
import { ApplicationSkillSumAggregate } from './application-skill-sum-aggregate.output';
import { ApplicationSkillMinAggregate } from './application-skill-min-aggregate.output';
import { ApplicationSkillMaxAggregate } from './application-skill-max-aggregate.output';

@ObjectType()
export class AggregateApplicationSkill {
  @Field(() => ApplicationSkillCountAggregate, { nullable: true })
  _count?: ApplicationSkillCountAggregate;

  @Field(() => ApplicationSkillAvgAggregate, { nullable: true })
  _avg?: ApplicationSkillAvgAggregate;

  @Field(() => ApplicationSkillSumAggregate, { nullable: true })
  _sum?: ApplicationSkillSumAggregate;

  @Field(() => ApplicationSkillMinAggregate, { nullable: true })
  _min?: ApplicationSkillMinAggregate;

  @Field(() => ApplicationSkillMaxAggregate, { nullable: true })
  _max?: ApplicationSkillMaxAggregate;
}
