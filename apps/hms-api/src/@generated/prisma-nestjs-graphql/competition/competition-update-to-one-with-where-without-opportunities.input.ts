import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionWhereInput } from './competition-where.input';
import { CompetitionUpdateWithoutOpportunitiesInput } from './competition-update-without-opportunities.input';

@InputType()
export class CompetitionUpdateToOneWithWhereWithoutOpportunitiesInput {
  @Field(() => CompetitionWhereInput, { nullable: true })
  @Type(() => CompetitionWhereInput)
  where?: CompetitionWhereInput;

  @Field(() => CompetitionUpdateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => CompetitionUpdateWithoutOpportunitiesInput)
  data!: CompetitionUpdateWithoutOpportunitiesInput;
}
