import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionUpdateInput } from './competition-update.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';

@ArgsType()
export class UpdateOneCompetitionArgs {
  @Field(() => CompetitionUpdateInput, { nullable: false })
  @Type(() => CompetitionUpdateInput)
  data!: CompetitionUpdateInput;

  @Field(() => CompetitionWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;
}
