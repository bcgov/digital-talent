import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ApplicationSkillMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  application_id?: true;

  @Field(() => Boolean, { nullable: true })
  skill_id?: true;

  @Field(() => Boolean, { nullable: true })
  years_experience?: true;

  @Field(() => Boolean, { nullable: true })
  description?: true;

  @Field(() => Boolean, { nullable: true })
  created_at?: true;

  @Field(() => Boolean, { nullable: true })
  updated_at?: true;

  @Field(() => Boolean, { nullable: true })
  deleted_at?: true;
}
