import { Field, InputType, Int } from '@nestjs/graphql';
import { SkillUpdateOneRequiredWithoutApplicationsNestedInput } from '../skill/skill-update-one-required-without-applications-nested.input';

@InputType()
export class ApplicationSkillUpdateWithoutApplicationInput {
  @Field(() => Int, { nullable: true })
  years_experience?: number;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => SkillUpdateOneRequiredWithoutApplicationsNestedInput, { nullable: true })
  skill?: SkillUpdateOneRequiredWithoutApplicationsNestedInput;
}
