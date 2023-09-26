import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SkillUpdateWithoutOpportunitiesInput } from './skill-update-without-opportunities.input';
import { SkillCreateWithoutOpportunitiesInput } from './skill-create-without-opportunities.input';
import { SkillWhereInput } from './skill-where.input';

@InputType()
export class SkillUpsertWithoutOpportunitiesInput {
  @Field(() => SkillUpdateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => SkillUpdateWithoutOpportunitiesInput)
  update!: SkillUpdateWithoutOpportunitiesInput;

  @Field(() => SkillCreateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => SkillCreateWithoutOpportunitiesInput)
  create!: SkillCreateWithoutOpportunitiesInput;

  @Field(() => SkillWhereInput, { nullable: true })
  @Type(() => SkillWhereInput)
  where?: SkillWhereInput;
}
