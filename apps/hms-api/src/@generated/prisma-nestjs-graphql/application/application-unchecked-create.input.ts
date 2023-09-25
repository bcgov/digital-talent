import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ApplicationLocationUncheckedCreateNestedManyWithoutApplicationInput } from '../application-location/application-location-unchecked-create-nested-many-without-application.input';
import { ApplicationSkillUncheckedCreateNestedManyWithoutApplicationInput } from '../application-skill/application-skill-unchecked-create-nested-many-without-application.input';

@InputType()
export class ApplicationUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  applicant_id!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => GraphQLJSON, { nullable: false })
  json!: any;

  @Field(() => ApplicationLocationUncheckedCreateNestedManyWithoutApplicationInput, { nullable: true })
  locations?: ApplicationLocationUncheckedCreateNestedManyWithoutApplicationInput;

  @Field(() => ApplicationSkillUncheckedCreateNestedManyWithoutApplicationInput, { nullable: true })
  skills?: ApplicationSkillUncheckedCreateNestedManyWithoutApplicationInput;
}
