import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationSkillCreateManyApplicationInput } from './application-skill-create-many-application.input';

@InputType()
export class ApplicationSkillCreateManyApplicationInputEnvelope {
  @Field(() => [ApplicationSkillCreateManyApplicationInput], { nullable: false })
  @Type(() => ApplicationSkillCreateManyApplicationInput)
  data!: Array<ApplicationSkillCreateManyApplicationInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
