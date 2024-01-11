import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationSkillScalarWhereInput } from './application-skill-scalar-where.input';
import { ApplicationSkillUpdateManyMutationInput } from './application-skill-update-many-mutation.input';

@InputType()
export class ApplicationSkillUpdateManyWithWhereWithoutSkillInput {
  @Field(() => ApplicationSkillScalarWhereInput, { nullable: false })
  @Type(() => ApplicationSkillScalarWhereInput)
  where!: ApplicationSkillScalarWhereInput;

  @Field(() => ApplicationSkillUpdateManyMutationInput, { nullable: false })
  @Type(() => ApplicationSkillUpdateManyMutationInput)
  data!: ApplicationSkillUpdateManyMutationInput;
}
