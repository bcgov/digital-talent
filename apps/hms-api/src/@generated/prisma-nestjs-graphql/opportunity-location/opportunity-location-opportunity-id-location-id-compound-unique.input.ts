import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class OpportunityLocationOpportunity_idLocation_idCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  opportunity_id!: string;

  @Field(() => String, { nullable: false })
  location_id!: string;
}
