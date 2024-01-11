import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionCreateInput } from './competition-create.input';
import { CompetitionUpdateInput } from './competition-update.input';

@ArgsType()
export class UpsertOneCompetitionArgs {
  @Field(() => CompetitionWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;

  @Field(() => CompetitionCreateInput, { nullable: false })
  @Type(() => CompetitionCreateInput)
  create!: CompetitionCreateInput;

  @Field(() => CompetitionUpdateInput, { nullable: false })
  @Type(() => CompetitionUpdateInput)
  update!: CompetitionUpdateInput;
}
