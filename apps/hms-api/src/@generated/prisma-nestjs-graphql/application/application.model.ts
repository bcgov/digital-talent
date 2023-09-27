import { Field, ObjectType, ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ApplicationLocation } from '../application-location/application-location.model';
import { ApplicationSkill } from '../application-skill/application-skill.model';
import { User } from '../user/user.model';

@ObjectType()
export class Application {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  applicant_id!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => GraphQLJSON, { nullable: false })
  json!: any;

  @Field(() => [ApplicationLocation], { nullable: true })
  locations?: Array<ApplicationLocation>;

  @Field(() => [ApplicationSkill], { nullable: true })
  skills?: Array<ApplicationSkill>;

  @Field(() => User, { nullable: false })
  applicant?: User;
}
