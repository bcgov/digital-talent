import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IdentityCreateManyUserInput } from './identity-create-many-user.input';

@InputType()
export class IdentityCreateManyUserInputEnvelope {
  @Field(() => [IdentityCreateManyUserInput], { nullable: false })
  @Type(() => IdentityCreateManyUserInput)
  data!: Array<IdentityCreateManyUserInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
