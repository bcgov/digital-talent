import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistUpdateInput } from './elist-update.input';
import { ElistWhereUniqueInput } from './elist-where-unique.input';

@ArgsType()
export class UpdateOneElistArgs {
  @Field(() => ElistUpdateInput, { nullable: false })
  @Type(() => ElistUpdateInput)
  data!: ElistUpdateInput;

  @Field(() => ElistWhereUniqueInput, { nullable: false })
  @Type(() => ElistWhereUniqueInput)
  where!: Prisma.AtLeast<ElistWhereUniqueInput, 'id'>;
}
