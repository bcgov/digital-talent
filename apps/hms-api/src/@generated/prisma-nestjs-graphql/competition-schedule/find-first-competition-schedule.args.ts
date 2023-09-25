import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionScheduleWhereInput } from './competition-schedule-where.input';
import { CompetitionScheduleOrderByWithRelationInput } from './competition-schedule-order-by-with-relation.input';
import { CompetitionScheduleWhereUniqueInput } from './competition-schedule-where-unique.input';
import { CompetitionScheduleScalarFieldEnum } from './competition-schedule-scalar-field.enum';

@ArgsType()
export class FindFirstCompetitionScheduleArgs {
  @Field(() => CompetitionScheduleWhereInput, { nullable: true })
  @Type(() => CompetitionScheduleWhereInput)
  where?: CompetitionScheduleWhereInput;

  @Field(() => [CompetitionScheduleOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CompetitionScheduleOrderByWithRelationInput>;

  @Field(() => CompetitionScheduleWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<CompetitionScheduleWhereUniqueInput, 'id' | 'competition_id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [CompetitionScheduleScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CompetitionScheduleScalarFieldEnum>;
}
