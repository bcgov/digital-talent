import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class JobDescriptionMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  classification_id?: string;

  @Field(() => String, { nullable: true })
  e_class_id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;
}
