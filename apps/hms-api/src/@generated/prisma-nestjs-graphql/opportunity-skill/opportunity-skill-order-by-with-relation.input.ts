import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { OpportunityOrderByWithRelationInput } from '../opportunity/opportunity-order-by-with-relation.input';
import { SkillOrderByWithRelationInput } from '../skill/skill-order-by-with-relation.input';

@InputType()
export class OpportunitySkillOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  opportunity_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  skill_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => OpportunityOrderByWithRelationInput, { nullable: true })
  opportunity?: OpportunityOrderByWithRelationInput;

  @Field(() => SkillOrderByWithRelationInput, { nullable: true })
  skill?: SkillOrderByWithRelationInput;
}
