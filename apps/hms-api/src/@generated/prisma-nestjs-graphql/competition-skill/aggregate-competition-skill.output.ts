import { Field, ObjectType } from '@nestjs/graphql';
import { CompetitionSkillCountAggregate } from './competition-skill-count-aggregate.output';
import { CompetitionSkillAvgAggregate } from './competition-skill-avg-aggregate.output';
import { CompetitionSkillSumAggregate } from './competition-skill-sum-aggregate.output';
import { CompetitionSkillMinAggregate } from './competition-skill-min-aggregate.output';
import { CompetitionSkillMaxAggregate } from './competition-skill-max-aggregate.output';

@ObjectType()
export class AggregateCompetitionSkill {
  @Field(() => CompetitionSkillCountAggregate, { nullable: true })
  _count?: CompetitionSkillCountAggregate;

  @Field(() => CompetitionSkillAvgAggregate, { nullable: true })
  _avg?: CompetitionSkillAvgAggregate;

  @Field(() => CompetitionSkillSumAggregate, { nullable: true })
  _sum?: CompetitionSkillSumAggregate;

  @Field(() => CompetitionSkillMinAggregate, { nullable: true })
  _min?: CompetitionSkillMinAggregate;

  @Field(() => CompetitionSkillMaxAggregate, { nullable: true })
  _max?: CompetitionSkillMaxAggregate;
}
