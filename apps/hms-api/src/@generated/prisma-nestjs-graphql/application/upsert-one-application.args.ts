import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApplicationWhereUniqueInput } from './application-where-unique.input';
import { ApplicationCreateInput } from './application-create.input';
import { ApplicationUpdateInput } from './application-update.input';

@ArgsType()
export class UpsertOneApplicationArgs {
  @Field(() => ApplicationWhereUniqueInput, { nullable: false })
  @Type(() => ApplicationWhereUniqueInput)
  where!: Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>;

  @Field(() => ApplicationCreateInput, { nullable: false })
  @Type(() => ApplicationCreateInput)
  create!: ApplicationCreateInput;

  @Field(() => ApplicationUpdateInput, { nullable: false })
  @Type(() => ApplicationUpdateInput)
  update!: ApplicationUpdateInput;
}
