import { Field, InputType } from '@nestjs/graphql';
import { SkillCategory } from '../prisma/skill-category.enum';

@InputType()
export class SkillUpdateManyMutationInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => SkillCategory, { nullable: true })
  category?: keyof typeof SkillCategory;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;
}
