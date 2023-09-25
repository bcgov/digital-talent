import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Type } from 'class-transformer';
import { CompetitionCategory } from '../prisma/competition-category.enum';
import { CompetitionState } from '../prisma/competition-state.enum';
import { OpportunityUpdateManyWithoutCompetitionNestedInput } from '../opportunity/opportunity-update-many-without-competition-nested.input';
import { ElistUpdateManyWithoutCompetitionNestedInput } from '../elist/elist-update-many-without-competition-nested.input';
import { JobDescriptionUpdateOneRequiredWithoutCompetitionNestedInput } from '../job-description/job-description-update-one-required-without-competition-nested.input';
import { UserUpdateOneRequiredWithoutCompetitionsNestedInput } from '../user/user-update-one-required-without-competitions-nested.input';
import { CompetitionScheduleUpdateOneWithoutCompetitionNestedInput } from '../competition-schedule/competition-schedule-update-one-without-competition-nested.input';

@InputType()
export class CompetitionUpdateWithoutSkillsInput {
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

  @Field(() => OpportunityUpdateManyWithoutCompetitionNestedInput, { nullable: true })
  opportunities?: OpportunityUpdateManyWithoutCompetitionNestedInput;

  @Field(() => ElistUpdateManyWithoutCompetitionNestedInput, { nullable: true })
  elist?: ElistUpdateManyWithoutCompetitionNestedInput;

  @Field(() => JobDescriptionUpdateOneRequiredWithoutCompetitionNestedInput, { nullable: true })
  @Type(() => JobDescriptionUpdateOneRequiredWithoutCompetitionNestedInput)
  job_description?: JobDescriptionUpdateOneRequiredWithoutCompetitionNestedInput;

  @Field(() => UserUpdateOneRequiredWithoutCompetitionsNestedInput, { nullable: true })
  recruiter?: UserUpdateOneRequiredWithoutCompetitionsNestedInput;

  @Field(() => CompetitionScheduleUpdateOneWithoutCompetitionNestedInput, { nullable: true })
  schedule?: CompetitionScheduleUpdateOneWithoutCompetitionNestedInput;
}
