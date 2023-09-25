import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SkillUpdateWithoutApplicationsInput } from './skill-update-without-applications.input';
import { SkillCreateWithoutApplicationsInput } from './skill-create-without-applications.input';
import { SkillWhereInput } from './skill-where.input';

@InputType()
export class SkillUpsertWithoutApplicationsInput {
  @Field(() => SkillUpdateWithoutApplicationsInput, { nullable: false })
  @Type(() => SkillUpdateWithoutApplicationsInput)
  update!: SkillUpdateWithoutApplicationsInput;

  @Field(() => SkillCreateWithoutApplicationsInput, { nullable: false })
  @Type(() => SkillCreateWithoutApplicationsInput)
  create!: SkillCreateWithoutApplicationsInput;

  @Field(() => SkillWhereInput, { nullable: true })
  @Type(() => SkillWhereInput)
  where?: SkillWhereInput;
}
