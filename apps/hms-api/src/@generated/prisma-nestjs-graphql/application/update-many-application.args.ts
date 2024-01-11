import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationUpdateManyMutationInput } from './application-update-many-mutation.input';
import { ApplicationWhereInput } from './application-where.input';

@ArgsType()
export class UpdateManyApplicationArgs {
  @Field(() => ApplicationUpdateManyMutationInput, { nullable: false })
  @Type(() => ApplicationUpdateManyMutationInput)
  data!: ApplicationUpdateManyMutationInput;

  @Field(() => ApplicationWhereInput, { nullable: true })
  @Type(() => ApplicationWhereInput)
  where?: ApplicationWhereInput;
}
