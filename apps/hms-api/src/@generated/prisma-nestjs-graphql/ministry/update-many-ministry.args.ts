import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { MinistryUpdateManyMutationInput } from './ministry-update-many-mutation.input';
import { MinistryWhereInput } from './ministry-where.input';

@ArgsType()
export class UpdateManyMinistryArgs {
  @Field(() => MinistryUpdateManyMutationInput, { nullable: false })
  @Type(() => MinistryUpdateManyMutationInput)
  data!: MinistryUpdateManyMutationInput;

  @Field(() => MinistryWhereInput, { nullable: true })
  @Type(() => MinistryWhereInput)
  where?: MinistryWhereInput;
}
