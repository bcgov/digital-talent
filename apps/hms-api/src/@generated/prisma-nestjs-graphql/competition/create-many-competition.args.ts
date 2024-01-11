import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionCreateManyInput } from './competition-create-many.input';

@ArgsType()
export class CreateManyCompetitionArgs {
  @Field(() => [CompetitionCreateManyInput], { nullable: false })
  @Type(() => CompetitionCreateManyInput)
  data!: Array<CompetitionCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
