import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationWhereInput } from './application-where.input';
import { ApplicationUpdateWithoutSkillsInput } from './application-update-without-skills.input';

@InputType()
export class ApplicationUpdateToOneWithWhereWithoutSkillsInput {
  @Field(() => ApplicationWhereInput, { nullable: true })
  @Type(() => ApplicationWhereInput)
  where?: ApplicationWhereInput;

  @Field(() => ApplicationUpdateWithoutSkillsInput, { nullable: false })
  @Type(() => ApplicationUpdateWithoutSkillsInput)
  data!: ApplicationUpdateWithoutSkillsInput;
}
