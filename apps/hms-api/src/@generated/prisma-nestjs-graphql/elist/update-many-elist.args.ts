import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistUpdateManyMutationInput } from './elist-update-many-mutation.input';
import { ElistWhereInput } from './elist-where.input';

@ArgsType()
export class UpdateManyElistArgs {
  @Field(() => ElistUpdateManyMutationInput, { nullable: false })
  @Type(() => ElistUpdateManyMutationInput)
  data!: ElistUpdateManyMutationInput;

  @Field(() => ElistWhereInput, { nullable: true })
  @Type(() => ElistWhereInput)
  where?: ElistWhereInput;
}
