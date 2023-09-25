import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SkillCreateManyInput } from './skill-create-many.input';

@ArgsType()
export class CreateManySkillArgs {
  @Field(() => [SkillCreateManyInput], { nullable: false })
  @Type(() => SkillCreateManyInput)
  data!: Array<SkillCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
