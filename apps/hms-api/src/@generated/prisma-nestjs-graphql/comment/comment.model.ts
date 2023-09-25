import { Field, ObjectType, ID } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Comment {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false, defaultValue: '0' })
  record_id!: string;

  @Field(() => String, { nullable: false, defaultValue: 'n/a' })
  record_type!: string;

  @Field(() => String, { nullable: false })
  user_id!: string;

  @Field(() => String, { nullable: false })
  text!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => User, { nullable: false })
  user?: User;
}
