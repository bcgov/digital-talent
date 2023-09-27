import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CompetitionOrderByWithRelationInput } from '../competition/competition-order-by-with-relation.input';
import { SkillOrderByWithRelationInput } from '../skill/skill-order-by-with-relation.input';

@InputType()
export class CompetitionSkillOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  competition_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  skill_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  min_years_experience?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  is_required?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => CompetitionOrderByWithRelationInput, { nullable: true })
  competition?: CompetitionOrderByWithRelationInput;

  @Field(() => SkillOrderByWithRelationInput, { nullable: true })
  skill?: SkillOrderByWithRelationInput;
}
