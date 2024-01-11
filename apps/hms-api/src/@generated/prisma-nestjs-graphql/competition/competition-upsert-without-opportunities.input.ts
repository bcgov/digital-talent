import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionUpdateWithoutOpportunitiesInput } from './competition-update-without-opportunities.input';
import { CompetitionCreateWithoutOpportunitiesInput } from './competition-create-without-opportunities.input';
import { CompetitionWhereInput } from './competition-where.input';

@InputType()
export class CompetitionUpsertWithoutOpportunitiesInput {
  @Field(() => CompetitionUpdateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => CompetitionUpdateWithoutOpportunitiesInput)
  update!: CompetitionUpdateWithoutOpportunitiesInput;

  @Field(() => CompetitionCreateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => CompetitionCreateWithoutOpportunitiesInput)
  create!: CompetitionCreateWithoutOpportunitiesInput;

  @Field(() => CompetitionWhereInput, { nullable: true })
  @Type(() => CompetitionWhereInput)
  where?: CompetitionWhereInput;
}
