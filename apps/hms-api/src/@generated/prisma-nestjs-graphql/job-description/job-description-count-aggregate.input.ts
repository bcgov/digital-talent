import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class JobDescriptionCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  classification_id?: true;

  @Field(() => Boolean, { nullable: true })
  e_class_id?: true;

  @Field(() => Boolean, { nullable: true })
  name?: true;

  @Field(() => Boolean, { nullable: true })
  created_at?: true;

  @Field(() => Boolean, { nullable: true })
  updated_at?: true;

  @Field(() => Boolean, { nullable: true })
  deleted_at?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}
