import { Field, ObjectType, ID } from '@nestjs/graphql';
import { SkillCategory } from '../prisma/skill-category.enum';
import { ApplicationSkill } from '../application-skill/application-skill.model';
import { CompetitionSkill } from '../competition-skill/competition-skill.model';
import { OpportunitySkill } from '../opportunity-skill/opportunity-skill.model';

@ObjectType()
export class Skill {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => SkillCategory, { nullable: false })
  category!: keyof typeof SkillCategory;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  description!: string | null;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => [ApplicationSkill], { nullable: true })
  applications?: Array<ApplicationSkill>;

  @Field(() => [CompetitionSkill], { nullable: true })
  competitions?: Array<CompetitionSkill>;

  @Field(() => [OpportunitySkill], { nullable: true })
  opportunities?: Array<OpportunitySkill>;
}
