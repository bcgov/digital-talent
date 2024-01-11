import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IdentityCreateManyInput } from './identity-create-many.input';

@ArgsType()
export class CreateManyIdentityArgs {
  @Field(() => [IdentityCreateManyInput], { nullable: false })
  @Type(() => IdentityCreateManyInput)
  data!: Array<IdentityCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
