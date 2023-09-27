import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Type } from 'class-transformer';
import { CompetitionCategory } from '../prisma/competition-category.enum';
import { CompetitionState } from '../prisma/competition-state.enum';
import { ElistUpdateManyWithoutCompetitionNestedInput } from '../elist/elist-update-many-without-competition-nested.input';
import { CompetitionSkillUpdateManyWithoutCompetitionNestedInput } from '../competition-skill/competition-skill-update-many-without-competition-nested.input';
import { JobDescriptionUpdateOneRequiredWithoutCompetitionsNestedInput } from '../job-description/job-description-update-one-required-without-competitions-nested.input';
import { UserUpdateOneRequiredWithoutCompetitionsNestedInput } from '../user/user-update-one-required-without-competitions-nested.input';
import { CompetitionScheduleUpdateOneWithoutCompetitionNestedInput } from '../competition-schedule/competition-schedule-update-one-without-competition-nested.input';

@InputType()
export class CompetitionUpdateWithoutOpportunitiesInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  deltek_id?: string;

  @Field(() => CompetitionCategory, { nullable: true })
  category?: keyof typeof CompetitionCategory;

  @Field(() => CompetitionState, { nullable: true })
  state?: keyof typeof CompetitionState;

  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ElistUpdateManyWithoutCompetitionNestedInput, { nullable: true })
  elist?: ElistUpdateManyWithoutCompetitionNestedInput;

  @Field(() => CompetitionSkillUpdateManyWithoutCompetitionNestedInput, { nullable: true })
  skills?: CompetitionSkillUpdateManyWithoutCompetitionNestedInput;

  @Field(() => JobDescriptionUpdateOneRequiredWithoutCompetitionsNestedInput, { nullable: true })
  @Type(() => JobDescriptionUpdateOneRequiredWithoutCompetitionsNestedInput)
  job_description?: JobDescriptionUpdateOneRequiredWithoutCompetitionsNestedInput;

  @Field(() => UserUpdateOneRequiredWithoutCompetitionsNestedInput, { nullable: true })
  recruiter?: UserUpdateOneRequiredWithoutCompetitionsNestedInput;

  @Field(() => CompetitionScheduleUpdateOneWithoutCompetitionNestedInput, { nullable: true })
  schedule?: CompetitionScheduleUpdateOneWithoutCompetitionNestedInput;
}
