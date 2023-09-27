import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class OpportunitySkillCreateManyInput {
  @Field(() => String, { nullable: false })
  opportunity_id!: string;

  @Field(() => String, { nullable: false })
  skill_id!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;
}
