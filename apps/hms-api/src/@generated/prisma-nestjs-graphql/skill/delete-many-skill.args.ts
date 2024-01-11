import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SkillWhereInput } from './skill-where.input';

@ArgsType()
export class DeleteManySkillArgs {
  @Field(() => SkillWhereInput, { nullable: true })
  @Type(() => SkillWhereInput)
  where?: SkillWhereInput;
}
