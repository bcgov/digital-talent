import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SkillWhereInput } from './skill-where.input';
import { SkillUpdateWithoutOpportunitiesInput } from './skill-update-without-opportunities.input';

@InputType()
export class SkillUpdateToOneWithWhereWithoutOpportunitiesInput {
  @Field(() => SkillWhereInput, { nullable: true })
  @Type(() => SkillWhereInput)
  where?: SkillWhereInput;

  @Field(() => SkillUpdateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => SkillUpdateWithoutOpportunitiesInput)
  data!: SkillUpdateWithoutOpportunitiesInput;
}
