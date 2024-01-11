import { Field, ArgsType, HideField, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistWhereInput } from './elist-where.input';
import { ElistOrderByWithRelationInput } from './elist-order-by-with-relation.input';
import { ElistWhereUniqueInput } from './elist-where-unique.input';
import { ElistScalarFieldEnum } from './elist-scalar-field.enum';

@ArgsType()
export class FindManyElistArgs {
  @Field(() => ElistWhereInput, { nullable: true })
  @Type(() => ElistWhereInput)
  where?: ElistWhereInput;

  @Field(() => [ElistOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ElistOrderByWithRelationInput>;

  @HideField()
  cursor?: Prisma.AtLeast<ElistWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @HideField()
  distinct?: Array<keyof typeof ElistScalarFieldEnum>;
}
