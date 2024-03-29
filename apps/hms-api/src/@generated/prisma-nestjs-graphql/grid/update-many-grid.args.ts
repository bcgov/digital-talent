import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { GridUpdateManyMutationInput } from './grid-update-many-mutation.input';
import { GridWhereInput } from './grid-where.input';

@ArgsType()
export class UpdateManyGridArgs {
  @Field(() => GridUpdateManyMutationInput, { nullable: false })
  @Type(() => GridUpdateManyMutationInput)
  data!: GridUpdateManyMutationInput;

  @Field(() => GridWhereInput, { nullable: true })
  @Type(() => GridWhereInput)
  where?: GridWhereInput;
}
