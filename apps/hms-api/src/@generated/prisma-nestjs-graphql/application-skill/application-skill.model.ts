import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Application } from '../application/application.model';
import { Skill } from '../skill/skill.model';

@ObjectType()
export class ApplicationSkill {
  @Field(() => String, { nullable: false })
  application_id!: string;

  @Field(() => String, { nullable: false })
  skill_id!: string;

  @Field(() => Int, { nullable: false })
  years_experience!: number;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => Application, { nullable: false })
  application?: Application;

  @Field(() => Skill, { nullable: false })
  skill?: Skill;
}
