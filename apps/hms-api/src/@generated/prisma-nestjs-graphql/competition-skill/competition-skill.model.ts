import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Competition } from '../competition/competition.model';
import { Skill } from '../skill/skill.model';

@ObjectType()
export class CompetitionSkill {
  @Field(() => String, { nullable: false })
  competition_id!: string;

  @Field(() => String, { nullable: false })
  skill_id!: string;

  @Field(() => Int, { nullable: false })
  min_years_experience!: number;

  @Field(() => Boolean, { nullable: false })
  is_required!: boolean;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => Competition, { nullable: false })
  competition?: Competition;

  @Field(() => Skill, { nullable: false })
  skill?: Skill;
}
