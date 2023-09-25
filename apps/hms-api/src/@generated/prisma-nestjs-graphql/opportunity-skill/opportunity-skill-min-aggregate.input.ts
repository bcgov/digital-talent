import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class OpportunitySkillMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  opportunity_id?: true;

  @Field(() => Boolean, { nullable: true })
  skill_id?: true;

  @Field(() => Boolean, { nullable: true })
  created_at?: true;

  @Field(() => Boolean, { nullable: true })
  deleted_at?: true;

  @Field(() => Boolean, { nullable: true })
  opportunityId?: true;
}
