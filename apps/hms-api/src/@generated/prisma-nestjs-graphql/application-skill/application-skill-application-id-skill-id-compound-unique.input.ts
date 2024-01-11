import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ApplicationSkillApplication_idSkill_idCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  application_id!: string;

  @Field(() => String, { nullable: false })
  skill_id!: string;
}
