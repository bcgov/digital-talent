import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { CompetitionCategory } from '../prisma/competition-category.enum';
import { CompetitionState } from '../prisma/competition-state.enum';

@InputType()
export class CompetitionUncheckedUpdateManyWithoutJob_descriptionInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  deltek_id?: string;

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
}
