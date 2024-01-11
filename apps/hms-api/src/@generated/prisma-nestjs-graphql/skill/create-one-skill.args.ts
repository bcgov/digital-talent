import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SkillCreateInput } from './skill-create.input';

@ArgsType()
export class CreateOneSkillArgs {
  @Field(() => SkillCreateInput, { nullable: false })
  @Type(() => SkillCreateInput)
  data!: SkillCreateInput;
}
