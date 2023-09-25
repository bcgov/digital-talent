import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationSkillCreateManySkillInput } from './application-skill-create-many-skill.input';

@InputType()
export class ApplicationSkillCreateManySkillInputEnvelope {
  @Field(() => [ApplicationSkillCreateManySkillInput], { nullable: false })
  @Type(() => ApplicationSkillCreateManySkillInput)
  data!: Array<ApplicationSkillCreateManySkillInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
