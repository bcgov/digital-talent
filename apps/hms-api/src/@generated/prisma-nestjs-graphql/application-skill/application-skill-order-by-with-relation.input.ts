import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ApplicationOrderByWithRelationInput } from '../application/application-order-by-with-relation.input';
import { SkillOrderByWithRelationInput } from '../skill/skill-order-by-with-relation.input';

@InputType()
export class ApplicationSkillOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  application_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  skill_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  years_experience?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => ApplicationOrderByWithRelationInput, { nullable: true })
  application?: ApplicationOrderByWithRelationInput;

  @Field(() => SkillOrderByWithRelationInput, { nullable: true })
  skill?: SkillOrderByWithRelationInput;
}
