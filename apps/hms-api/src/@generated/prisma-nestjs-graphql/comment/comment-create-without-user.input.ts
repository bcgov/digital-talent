import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CommentCreateWithoutUserInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  record_id?: string;

  @Field(() => String, { nullable: true })
  record_type?: string;

  @Field(() => String, { nullable: false })
  text!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;
}
