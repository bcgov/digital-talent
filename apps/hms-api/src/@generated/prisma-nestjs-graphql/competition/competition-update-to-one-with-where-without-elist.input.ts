import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionWhereInput } from './competition-where.input';
import { CompetitionUpdateWithoutElistInput } from './competition-update-without-elist.input';

@InputType()
export class CompetitionUpdateToOneWithWhereWithoutElistInput {
  @Field(() => CompetitionWhereInput, { nullable: true })
  @Type(() => CompetitionWhereInput)
  where?: CompetitionWhereInput;

  @Field(() => CompetitionUpdateWithoutElistInput, { nullable: false })
  @Type(() => CompetitionUpdateWithoutElistInput)
  data!: CompetitionUpdateWithoutElistInput;
}
