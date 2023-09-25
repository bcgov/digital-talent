import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { GridUpdateInput } from './grid-update.input';
import { GridWhereUniqueInput } from './grid-where-unique.input';

@ArgsType()
export class UpdateOneGridArgs {
  @Field(() => GridUpdateInput, { nullable: false })
  @Type(() => GridUpdateInput)
  data!: GridUpdateInput;

  @Field(() => GridWhereUniqueInput, { nullable: false })
  @Type(() => GridWhereUniqueInput)
  where!: Prisma.AtLeast<GridWhereUniqueInput, 'id'>;
}
