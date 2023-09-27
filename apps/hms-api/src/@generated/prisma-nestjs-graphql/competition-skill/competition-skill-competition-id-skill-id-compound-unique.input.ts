import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CompetitionSkillCompetition_idSkill_idCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  competition_id!: string;

  @Field(() => String, { nullable: false })
  skill_id!: string;
}
