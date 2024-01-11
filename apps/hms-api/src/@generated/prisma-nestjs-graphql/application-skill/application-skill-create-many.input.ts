import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ApplicationSkillCreateManyInput {
  @Field(() => String, { nullable: false })
  application_id!: string;

  @Field(() => String, { nullable: false })
  skill_id!: string;

  @Field(() => Int, { nullable: false })
  years_experience!: number;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;
}
