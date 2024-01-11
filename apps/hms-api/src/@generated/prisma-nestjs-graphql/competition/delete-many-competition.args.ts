import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionWhereInput } from './competition-where.input';

@ArgsType()
export class DeleteManyCompetitionArgs {
  @Field(() => CompetitionWhereInput, { nullable: true })
  @Type(() => CompetitionWhereInput)
  where?: CompetitionWhereInput;
}
