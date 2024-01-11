import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionUpdateWithoutElistInput } from './competition-update-without-elist.input';
import { CompetitionCreateWithoutElistInput } from './competition-create-without-elist.input';
import { CompetitionWhereInput } from './competition-where.input';

@InputType()
export class CompetitionUpsertWithoutElistInput {
  @Field(() => CompetitionUpdateWithoutElistInput, { nullable: false })
  @Type(() => CompetitionUpdateWithoutElistInput)
  update!: CompetitionUpdateWithoutElistInput;

  @Field(() => CompetitionCreateWithoutElistInput, { nullable: false })
  @Type(() => CompetitionCreateWithoutElistInput)
  create!: CompetitionCreateWithoutElistInput;

  @Field(() => CompetitionWhereInput, { nullable: true })
  @Type(() => CompetitionWhereInput)
  where?: CompetitionWhereInput;
}
