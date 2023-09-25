import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SkillWhereInput } from './skill-where.input';
import { SkillOrderByWithRelationInput } from './skill-order-by-with-relation.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { SkillScalarFieldEnum } from './skill-scalar-field.enum';

@ArgsType()
export class FindFirstSkillArgs {
  @Field(() => SkillWhereInput, { nullable: true })
  @Type(() => SkillWhereInput)
  where?: SkillWhereInput;

  @Field(() => [SkillOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<SkillOrderByWithRelationInput>;

  @Field(() => SkillWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [SkillScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof SkillScalarFieldEnum>;
}
