import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SkillWhereInput } from './skill-where.input';
import { SkillUpdateWithoutApplicationsInput } from './skill-update-without-applications.input';

@InputType()
export class SkillUpdateToOneWithWhereWithoutApplicationsInput {
  @Field(() => SkillWhereInput, { nullable: true })
  @Type(() => SkillWhereInput)
  where?: SkillWhereInput;

  @Field(() => SkillUpdateWithoutApplicationsInput, { nullable: false })
  @Type(() => SkillUpdateWithoutApplicationsInput)
  data!: SkillUpdateWithoutApplicationsInput;
}
