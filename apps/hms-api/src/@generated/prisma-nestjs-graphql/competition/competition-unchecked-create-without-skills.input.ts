import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { CompetitionCategory } from '../prisma/competition-category.enum';
import { CompetitionState } from '../prisma/competition-state.enum';
import { OpportunityUncheckedCreateNestedManyWithoutCompetitionInput } from '../opportunity/opportunity-unchecked-create-nested-many-without-competition.input';
import { ElistUncheckedCreateNestedManyWithoutCompetitionInput } from '../elist/elist-unchecked-create-nested-many-without-competition.input';
import { CompetitionScheduleUncheckedCreateNestedOneWithoutCompetitionInput } from '../competition-schedule/competition-schedule-unchecked-create-nested-one-without-competition.input';

@InputType()
export class CompetitionUncheckedCreateWithoutSkillsInput {
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

  @Field(() => OpportunityUncheckedCreateNestedManyWithoutCompetitionInput, { nullable: true })
  opportunities?: OpportunityUncheckedCreateNestedManyWithoutCompetitionInput;

  @Field(() => ElistUncheckedCreateNestedManyWithoutCompetitionInput, { nullable: true })
  elist?: ElistUncheckedCreateNestedManyWithoutCompetitionInput;

  @Field(() => CompetitionScheduleUncheckedCreateNestedOneWithoutCompetitionInput, { nullable: true })
  schedule?: CompetitionScheduleUncheckedCreateNestedOneWithoutCompetitionInput;
}
