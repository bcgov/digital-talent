import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionCreateInput } from './competition-create.input';

@ArgsType()
export class CreateOneCompetitionArgs {
  @Field(() => CompetitionCreateInput, { nullable: false })
  @Type(() => CompetitionCreateInput)
  data!: CompetitionCreateInput;
}
