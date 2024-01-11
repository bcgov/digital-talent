import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationUpdateInput } from './application-update.input';
import { ApplicationWhereUniqueInput } from './application-where-unique.input';

@ArgsType()
export class UpdateOneApplicationArgs {
  @Field(() => ApplicationUpdateInput, { nullable: false })
  @Type(() => ApplicationUpdateInput)
  data!: ApplicationUpdateInput;

  @Field(() => ApplicationWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>;
}
