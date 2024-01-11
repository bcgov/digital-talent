import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationSkillUpdateInput } from './application-skill-update.input';
import { ApplicationSkillWhereUniqueInput } from './application-skill-where-unique.input';

@ArgsType()
export class UpdateOneApplicationSkillArgs {
  @Field(() => ApplicationSkillUpdateInput, { nullable: false })
  @Type(() => ApplicationSkillUpdateInput)
  data!: ApplicationSkillUpdateInput;

  @Field(() => ApplicationSkillWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationSkillWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationSkillWhereUniqueInput, 'application_id_skill_id'>;
}
