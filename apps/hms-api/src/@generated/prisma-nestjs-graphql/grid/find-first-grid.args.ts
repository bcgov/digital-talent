import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { GridWhereInput } from './grid-where.input';
import { GridOrderByWithRelationInput } from './grid-order-by-with-relation.input';
import { GridWhereUniqueInput } from './grid-where-unique.input';
import { GridScalarFieldEnum } from './grid-scalar-field.enum';

@ArgsType()
export class FindFirstGridArgs {
  @Field(() => GridWhereInput, { nullable: true })
  @Type(() => GridWhereInput)
  where?: GridWhereInput;

  @Field(() => [GridOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<GridOrderByWithRelationInput>;

  @Field(() => GridWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<GridWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [GridScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof GridScalarFieldEnum>;
}
