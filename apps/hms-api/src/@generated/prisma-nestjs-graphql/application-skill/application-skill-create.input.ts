import { Field, InputType, Int } from '@nestjs/graphql';
import { ApplicationCreateNestedOneWithoutSkillsInput } from '../application/application-create-nested-one-without-skills.input';
import { SkillCreateNestedOneWithoutApplicationsInput } from '../skill/skill-create-nested-one-without-applications.input';

@InputType()
export class ApplicationSkillCreateInput {
  @Field(() => Int, { nullable: false })
  years_experience!: number;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ApplicationCreateNestedOneWithoutSkillsInput, { nullable: false })
  application!: ApplicationCreateNestedOneWithoutSkillsInput;

  @Field(() => SkillCreateNestedOneWithoutApplicationsInput, { nullable: false })
  skill!: SkillCreateNestedOneWithoutApplicationsInput;
}
