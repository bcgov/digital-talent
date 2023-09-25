import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ApplicationLocationCreateManyLocationInput {
  @Field(() => String, { nullable: false })
  application_id!: string;

  @Field(() => Int, { nullable: false })
  rank!: number;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;
}
