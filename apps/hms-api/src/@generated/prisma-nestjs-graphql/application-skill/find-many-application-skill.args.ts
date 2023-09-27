import { Field, ArgsType, HideField, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationSkillWhereInput } from './application-skill-where.input';
import { ApplicationSkillOrderByWithRelationInput } from './application-skill-order-by-with-relation.input';
import { ApplicationSkillWhereUniqueInput } from './application-skill-where-unique.input';
import { ApplicationSkillScalarFieldEnum } from './application-skill-scalar-field.enum';

@ArgsType()
export class FindManyApplicationSkillArgs {
  @Field(() => ApplicationSkillWhereInput, { nullable: true })
  @Type(() => ApplicationSkillWhereInput)
  where?: ApplicationSkillWhereInput;

  @Field(() => [ApplicationSkillOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ApplicationSkillOrderByWithRelationInput>;

  @HideField()
  cursor?: Prisma.AtLeast<ApplicationSkillWhereUniqueInput, 'application_id_skill_id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @HideField()
  distinct?: Array<keyof typeof ApplicationSkillScalarFieldEnum>;
}
