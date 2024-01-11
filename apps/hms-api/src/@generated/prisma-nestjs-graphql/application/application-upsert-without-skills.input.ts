import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationUpdateWithoutSkillsInput } from './application-update-without-skills.input';
import { ApplicationCreateWithoutSkillsInput } from './application-create-without-skills.input';
import { ApplicationWhereInput } from './application-where.input';

@InputType()
export class ApplicationUpsertWithoutSkillsInput {
  @Field(() => ApplicationUpdateWithoutSkillsInput, { nullable: false })
  @Type(() => ApplicationUpdateWithoutSkillsInput)
  update!: ApplicationUpdateWithoutSkillsInput;

  @Field(() => ApplicationCreateWithoutSkillsInput, { nullable: false })
  @Type(() => ApplicationCreateWithoutSkillsInput)
  create!: ApplicationCreateWithoutSkillsInput;

  @Field(() => ApplicationWhereInput, { nullable: true })
  @Type(() => ApplicationWhereInput)
  where?: ApplicationWhereInput;
}
