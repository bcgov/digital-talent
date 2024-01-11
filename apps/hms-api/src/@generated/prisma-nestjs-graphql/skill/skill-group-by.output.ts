import { Field, ObjectType } from '@nestjs/graphql';
import { SkillCategory } from '../prisma/skill-category.enum';
import { SkillCountAggregate } from './skill-count-aggregate.output';
import { SkillMinAggregate } from './skill-min-aggregate.output';
import { SkillMaxAggregate } from './skill-max-aggregate.output';

@ObjectType()
export class SkillGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => SkillCategory, { nullable: false })
  category!: keyof typeof SkillCategory;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => SkillCountAggregate, { nullable: true })
  _count?: SkillCountAggregate;

  @Field(() => SkillMinAggregate, { nullable: true })
  _min?: SkillMinAggregate;

  @Field(() => SkillMaxAggregate, { nullable: true })
  _max?: SkillMaxAggregate;
}
