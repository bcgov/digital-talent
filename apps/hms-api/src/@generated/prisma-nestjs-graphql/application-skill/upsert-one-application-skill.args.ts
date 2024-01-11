import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApplicationSkillWhereUniqueInput } from './application-skill-where-unique.input';
import { ApplicationSkillCreateInput } from './application-skill-create.input';
import { ApplicationSkillUpdateInput } from './application-skill-update.input';

@ArgsType()
export class UpsertOneApplicationSkillArgs {
  @Field(() => ApplicationSkillWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationSkillWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationSkillWhereUniqueInput, 'application_id_skill_id'>;

  @Field(() => ApplicationSkillCreateInput, { nullable: false })
  @Type(() => ApplicationSkillCreateInput)
  create!: ApplicationSkillCreateInput;

  @Field(() => ApplicationSkillUpdateInput, { nullable: false })
  @Type(() => ApplicationSkillUpdateInput)
  update!: ApplicationSkillUpdateInput;
}
