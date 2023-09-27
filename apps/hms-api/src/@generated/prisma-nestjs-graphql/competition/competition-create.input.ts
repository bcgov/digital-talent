import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Type } from 'class-transformer';
import { CompetitionCategory } from '../prisma/competition-category.enum';
import { CompetitionState } from '../prisma/competition-state.enum';
import { OpportunityCreateNestedManyWithoutCompetitionInput } from '../opportunity/opportunity-create-nested-many-without-competition.input';
import { ElistCreateNestedManyWithoutCompetitionInput } from '../elist/elist-create-nested-many-without-competition.input';
import { CompetitionSkillCreateNestedManyWithoutCompetitionInput } from '../competition-skill/competition-skill-create-nested-many-without-competition.input';
import { JobDescriptionCreateNestedOneWithoutCompetitionsInput } from '../job-description/job-description-create-nested-one-without-competitions.input';
import { UserCreateNestedOneWithoutCompetitionsInput } from '../user/user-create-nested-one-without-competitions.input';
import { CompetitionScheduleCreateNestedOneWithoutCompetitionInput } from '../competition-schedule/competition-schedule-create-nested-one-without-competition.input';

@InputType()
export class CompetitionCreateInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  deltek_id?: string;

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

  @Field(() => OpportunityCreateNestedManyWithoutCompetitionInput, { nullable: true })
  opportunities?: OpportunityCreateNestedManyWithoutCompetitionInput;

  @Field(() => ElistCreateNestedManyWithoutCompetitionInput, { nullable: true })
  elist?: ElistCreateNestedManyWithoutCompetitionInput;

  @Field(() => CompetitionSkillCreateNestedManyWithoutCompetitionInput, { nullable: true })
  skills?: CompetitionSkillCreateNestedManyWithoutCompetitionInput;

  @Field(() => JobDescriptionCreateNestedOneWithoutCompetitionsInput, { nullable: false })
  @Type(() => JobDescriptionCreateNestedOneWithoutCompetitionsInput)
  job_description!: JobDescriptionCreateNestedOneWithoutCompetitionsInput;

  @Field(() => UserCreateNestedOneWithoutCompetitionsInput, { nullable: false })
  recruiter!: UserCreateNestedOneWithoutCompetitionsInput;

  @Field(() => CompetitionScheduleCreateNestedOneWithoutCompetitionInput, { nullable: true })
  schedule?: CompetitionScheduleCreateNestedOneWithoutCompetitionInput;
}
