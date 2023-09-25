import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ApplicationSkillUpdateManyWithoutApplicationNestedInput } from '../application-skill/application-skill-update-many-without-application-nested.input';
import { UserUpdateOneRequiredWithoutApplicationsNestedInput } from '../user/user-update-one-required-without-applications-nested.input';

@InputType()
export class ApplicationUpdateWithoutLocationsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => GraphQLJSON, { nullable: true })
  json?: any;

  @Field(() => ApplicationSkillUpdateManyWithoutApplicationNestedInput, { nullable: true })
  skills?: ApplicationSkillUpdateManyWithoutApplicationNestedInput;

  @Field(() => UserUpdateOneRequiredWithoutApplicationsNestedInput, { nullable: true })
  applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput;
}
