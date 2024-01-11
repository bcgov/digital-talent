import { Field, InputType } from '@nestjs/graphql';
import { CompetitionWhereInput } from './competition-where.input';

@InputType()
export class CompetitionListRelationFilter {
  @Field(() => CompetitionWhereInput, { nullable: true })
  every?: CompetitionWhereInput;

  @Field(() => CompetitionWhereInput, { nullable: true })
  some?: CompetitionWhereInput;

  @Field(() => CompetitionWhereInput, { nullable: true })
  none?: CompetitionWhereInput;
}
