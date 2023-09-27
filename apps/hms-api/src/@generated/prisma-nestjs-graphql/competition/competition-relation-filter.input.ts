import { Field, InputType } from '@nestjs/graphql';
import { CompetitionWhereInput } from './competition-where.input';

@InputType()
export class CompetitionRelationFilter {
  @Field(() => CompetitionWhereInput, { nullable: true })
  is?: CompetitionWhereInput;

  @Field(() => CompetitionWhereInput, { nullable: true })
  isNot?: CompetitionWhereInput;
}
