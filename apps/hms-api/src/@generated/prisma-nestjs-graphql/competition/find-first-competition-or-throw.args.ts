import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionWhereInput } from './competition-where.input';
import { CompetitionOrderByWithRelationInput } from './competition-order-by-with-relation.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionScalarFieldEnum } from './competition-scalar-field.enum';

@ArgsType()
export class FindFirstCompetitionOrThrowArgs {
  @Field(() => CompetitionWhereInput, { nullable: true })
  @Type(() => CompetitionWhereInput)
  where?: CompetitionWhereInput;

  @Field(() => [CompetitionOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CompetitionOrderByWithRelationInput>;

  @Field(() => CompetitionWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [CompetitionScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CompetitionScalarFieldEnum>;
}
