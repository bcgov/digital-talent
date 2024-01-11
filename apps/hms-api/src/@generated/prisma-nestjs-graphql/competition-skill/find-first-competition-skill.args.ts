import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionSkillWhereInput } from './competition-skill-where.input';
import { CompetitionSkillOrderByWithRelationInput } from './competition-skill-order-by-with-relation.input';
import { CompetitionSkillWhereUniqueInput } from './competition-skill-where-unique.input';
import { CompetitionSkillScalarFieldEnum } from './competition-skill-scalar-field.enum';

@ArgsType()
export class FindFirstCompetitionSkillArgs {
  @Field(() => CompetitionSkillWhereInput, { nullable: true })
  @Type(() => CompetitionSkillWhereInput)
  where?: CompetitionSkillWhereInput;

  @Field(() => [CompetitionSkillOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CompetitionSkillOrderByWithRelationInput>;

  @Field(() => CompetitionSkillWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [CompetitionSkillScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof CompetitionSkillScalarFieldEnum>;
}
