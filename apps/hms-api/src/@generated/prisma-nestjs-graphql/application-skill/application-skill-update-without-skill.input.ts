import { Field, InputType, Int } from '@nestjs/graphql';
import { ApplicationUpdateOneRequiredWithoutSkillsNestedInput } from '../application/application-update-one-required-without-skills-nested.input';

@InputType()
export class ApplicationSkillUpdateWithoutSkillInput {
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

  @Field(() => ApplicationUpdateOneRequiredWithoutSkillsNestedInput, { nullable: true })
  application?: ApplicationUpdateOneRequiredWithoutSkillsNestedInput;
}
