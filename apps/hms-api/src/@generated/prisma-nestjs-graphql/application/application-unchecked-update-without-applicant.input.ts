import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ApplicationLocationUncheckedUpdateManyWithoutApplicationNestedInput } from '../application-location/application-location-unchecked-update-many-without-application-nested.input';
import { ApplicationSkillUncheckedUpdateManyWithoutApplicationNestedInput } from '../application-skill/application-skill-unchecked-update-many-without-application-nested.input';

@InputType()
export class ApplicationUncheckedUpdateWithoutApplicantInput {
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

  @Field(() => ApplicationLocationUncheckedUpdateManyWithoutApplicationNestedInput, { nullable: true })
  locations?: ApplicationLocationUncheckedUpdateManyWithoutApplicationNestedInput;

  @Field(() => ApplicationSkillUncheckedUpdateManyWithoutApplicationNestedInput, { nullable: true })
  skills?: ApplicationSkillUncheckedUpdateManyWithoutApplicationNestedInput;
}
