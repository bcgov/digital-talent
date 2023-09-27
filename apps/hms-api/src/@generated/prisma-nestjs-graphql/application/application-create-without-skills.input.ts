import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ApplicationLocationCreateNestedManyWithoutApplicationInput } from '../application-location/application-location-create-nested-many-without-application.input';
import { UserCreateNestedOneWithoutApplicationsInput } from '../user/user-create-nested-one-without-applications.input';

@InputType()
export class ApplicationCreateWithoutSkillsInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => GraphQLJSON, { nullable: false })
  json!: any;

  @Field(() => ApplicationLocationCreateNestedManyWithoutApplicationInput, { nullable: true })
  locations?: ApplicationLocationCreateNestedManyWithoutApplicationInput;

  @Field(() => UserCreateNestedOneWithoutApplicationsInput, { nullable: false })
  applicant!: UserCreateNestedOneWithoutApplicationsInput;
}
