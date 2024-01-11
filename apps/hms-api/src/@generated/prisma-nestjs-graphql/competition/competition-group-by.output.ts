import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { CompetitionCategory } from '../prisma/competition-category.enum';
import { CompetitionState } from '../prisma/competition-state.enum';
import { CompetitionCountAggregate } from './competition-count-aggregate.output';
import { CompetitionMinAggregate } from './competition-min-aggregate.output';
import { CompetitionMaxAggregate } from './competition-max-aggregate.output';

@ObjectType()
export class CompetitionGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  deltek_id?: string;

  @Field(() => String, { nullable: false })
  job_description_id!: string;

  @Field(() => String, { nullable: false })
  recruiter_id!: string;

  @Field(() => CompetitionCategory, { nullable: false })
  category!: keyof typeof CompetitionCategory;

  @Field(() => CompetitionState, { nullable: false })
  state!: keyof typeof CompetitionState;

  @Field(() => GraphQLJSON, { nullable: false })
  metadata!: any;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => CompetitionCountAggregate, { nullable: true })
  _count?: CompetitionCountAggregate;

  @Field(() => CompetitionMinAggregate, { nullable: true })
  _min?: CompetitionMinAggregate;

  @Field(() => CompetitionMaxAggregate, { nullable: true })
  _max?: CompetitionMaxAggregate;
}
