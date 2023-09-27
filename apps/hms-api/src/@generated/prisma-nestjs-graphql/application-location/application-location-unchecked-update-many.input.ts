import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ApplicationLocationUncheckedUpdateManyInput {
  @Field(() => String, { nullable: true })
  application_id?: string;

  @Field(() => String, { nullable: true })
  location_id?: string;

  @Field(() => Int, { nullable: true })
  rank?: number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;
}
