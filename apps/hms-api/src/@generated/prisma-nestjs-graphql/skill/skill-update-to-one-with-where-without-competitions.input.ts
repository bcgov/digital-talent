import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SkillWhereInput } from './skill-where.input';
import { SkillUpdateWithoutCompetitionsInput } from './skill-update-without-competitions.input';

@InputType()
export class SkillUpdateToOneWithWhereWithoutCompetitionsInput {
  @Field(() => SkillWhereInput, { nullable: true })
  @Type(() => SkillWhereInput)
  where?: SkillWhereInput;

  @Field(() => SkillUpdateWithoutCompetitionsInput, { nullable: false })
  @Type(() => SkillUpdateWithoutCompetitionsInput)
  data!: SkillUpdateWithoutCompetitionsInput;
}
