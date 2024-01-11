import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationSkillCreateManyInput } from './application-skill-create-many.input';

@ArgsType()
export class CreateManyApplicationSkillArgs {
  @Field(() => [ApplicationSkillCreateManyInput], { nullable: false })
  @Type(() => ApplicationSkillCreateManyInput)
  data!: Array<ApplicationSkillCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
