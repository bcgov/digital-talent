import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { CompetitionCategory } from '../prisma/competition-category.enum';
import { CompetitionState } from '../prisma/competition-state.enum';
import { OpportunityUncheckedUpdateManyWithoutCompetitionNestedInput } from '../opportunity/opportunity-unchecked-update-many-without-competition-nested.input';
import { ElistUncheckedUpdateManyWithoutCompetitionNestedInput } from '../elist/elist-unchecked-update-many-without-competition-nested.input';
import { CompetitionSkillUncheckedUpdateManyWithoutCompetitionNestedInput } from '../competition-skill/competition-skill-unchecked-update-many-without-competition-nested.input';

@InputType()
export class CompetitionUncheckedUpdateWithoutScheduleInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  deltek_id?: string;

  @Field(() => String, { nullable: true })
  job_description_id?: string;

  @Field(() => String, { nullable: true })
  recruiter_id?: string;

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

  @Field(() => OpportunityUncheckedUpdateManyWithoutCompetitionNestedInput, { nullable: true })
  opportunities?: OpportunityUncheckedUpdateManyWithoutCompetitionNestedInput;

  @Field(() => ElistUncheckedUpdateManyWithoutCompetitionNestedInput, { nullable: true })
  elist?: ElistUncheckedUpdateManyWithoutCompetitionNestedInput;

  @Field(() => CompetitionSkillUncheckedUpdateManyWithoutCompetitionNestedInput, { nullable: true })
  skills?: CompetitionSkillUncheckedUpdateManyWithoutCompetitionNestedInput;
}
