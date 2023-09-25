import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationSkillUpdateManyMutationInput } from './application-skill-update-many-mutation.input';
import { ApplicationSkillWhereInput } from './application-skill-where.input';

@ArgsType()
export class UpdateManyApplicationSkillArgs {
  @Field(() => ApplicationSkillUpdateManyMutationInput, { nullable: false })
  @Type(() => ApplicationSkillUpdateManyMutationInput)
  data!: ApplicationSkillUpdateManyMutationInput;

  @Field(() => ApplicationSkillWhereInput, { nullable: true })
  @Type(() => ApplicationSkillWhereInput)
  where?: ApplicationSkillWhereInput;
}
