import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { SkillWhereUniqueInput } from './skill-where-unique.input';

@ArgsType()
export class DeleteOneSkillArgs {
  @Field(() => SkillWhereUniqueInput, { nullable: false })
  @Type(() => SkillWhereUniqueInput)
  where!: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;
}
