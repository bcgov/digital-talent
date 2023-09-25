import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CompetitionSkillCountAggregate } from './competition-skill-count-aggregate.output';
import { CompetitionSkillAvgAggregate } from './competition-skill-avg-aggregate.output';
import { CompetitionSkillSumAggregate } from './competition-skill-sum-aggregate.output';
import { CompetitionSkillMinAggregate } from './competition-skill-min-aggregate.output';
import { CompetitionSkillMaxAggregate } from './competition-skill-max-aggregate.output';

@ObjectType()
export class CompetitionSkillGroupBy {
  @Field(() => String, { nullable: false })
  competition_id!: string;

  @Field(() => String, { nullable: false })
  skill_id!: string;

  @Field(() => Int, { nullable: false })
  min_years_experience!: number;

  @Field(() => Boolean, { nullable: false })
  is_required!: boolean;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

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
