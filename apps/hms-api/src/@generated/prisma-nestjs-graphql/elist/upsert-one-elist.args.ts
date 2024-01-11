import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ElistWhereUniqueInput } from './elist-where-unique.input';
import { ElistCreateInput } from './elist-create.input';
import { ElistUpdateInput } from './elist-update.input';

@ArgsType()
export class UpsertOneElistArgs {
  @Field(() => ElistWhereUniqueInput, { nullable: false })
  @Type(() => ElistWhereUniqueInput)
  where!: Prisma.AtLeast<ElistWhereUniqueInput, 'id'>;

  @Field(() => ElistCreateInput, { nullable: false })
  @Type(() => ElistCreateInput)
  create!: ElistCreateInput;

  @Field(() => ElistUpdateInput, { nullable: false })
  @Type(() => ElistUpdateInput)
  update!: ElistUpdateInput;
}
