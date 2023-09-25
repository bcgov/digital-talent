import { Field, ObjectType, ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { CompetitionCategory } from '../prisma/competition-category.enum';
import { CompetitionState } from '../prisma/competition-state.enum';
import { Opportunity } from '../opportunity/opportunity.model';
import { Elist } from '../elist/elist.model';
import { CompetitionSkill } from '../competition-skill/competition-skill.model';
import { JobDescription } from '../job-description/job-description.model';
import { User } from '../user/user.model';
import { CompetitionSchedule } from '../competition-schedule/competition-schedule.model';

@ObjectType()
export class Competition {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  deltek_id!: string | null;

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
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => [Opportunity], { nullable: true })
  opportunities?: Array<Opportunity>;

  @Field(() => [Elist], { nullable: true })
  elist?: Array<Elist>;

  @Field(() => [CompetitionSkill], { nullable: true })
  skills?: Array<CompetitionSkill>;

  @Field(() => JobDescription, { nullable: false })
  job_description?: JobDescription;

  @Field(() => User, { nullable: false })
  recruiter?: User;

  @Field(() => CompetitionSchedule, { nullable: true })
  schedule?: CompetitionSchedule | null;
}
