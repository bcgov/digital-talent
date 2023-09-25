import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationSkillCreateInput } from './application-skill-create.input';

@ArgsType()
export class CreateOneApplicationSkillArgs {
  @Field(() => ApplicationSkillCreateInput, { nullable: false })
  @Type(() => ApplicationSkillCreateInput)
  data!: ApplicationSkillCreateInput;
}
