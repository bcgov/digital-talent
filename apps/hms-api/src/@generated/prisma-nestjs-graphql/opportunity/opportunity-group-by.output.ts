import { Field, ObjectType } from '@nestjs/graphql';
import { OpportunityState } from '../prisma/opportunity-state.enum';
import { OpportunityInvolvement } from '../prisma/opportunity-involvement.enum';
import { WorkOption } from '../prisma/work-option.enum';
import { OpportunityCountAggregate } from './opportunity-count-aggregate.output';
import { OpportunityMinAggregate } from './opportunity-min-aggregate.output';
import { OpportunityMaxAggregate } from './opportunity-max-aggregate.output';

@ObjectType()
export class OpportunityGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  competition_id!: string;

  @Field(() => String, { nullable: false })
  deltek_id!: string;

  @Field(() => String, { nullable: false })
  hiring_manager_id!: string;

  @Field(() => String, { nullable: false })
  ministry_id!: string;

  @Field(() => OpportunityState, { nullable: false })
  state!: keyof typeof OpportunityState;

  @Field(() => OpportunityInvolvement, { nullable: false })
  involvement!: keyof typeof OpportunityInvolvement;

  @Field(() => WorkOption, { nullable: false })
  work_option!: keyof typeof WorkOption;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: false })
  candidate_description!: string;

  @Field(() => String, { nullable: false })
  team_name!: string;

  @Field(() => String, { nullable: false })
  team_description!: string;

  @Field(() => String, { nullable: false })
  work_examples!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => OpportunityCountAggregate, { nullable: true })
  _count?: OpportunityCountAggregate;

  @Field(() => OpportunityMinAggregate, { nullable: true })
  _min?: OpportunityMinAggregate;

  @Field(() => OpportunityMaxAggregate, { nullable: true })
  _max?: OpportunityMaxAggregate;
}
