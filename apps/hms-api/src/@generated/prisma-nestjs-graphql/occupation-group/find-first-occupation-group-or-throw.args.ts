import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OccupationGroupWhereInput } from './occupation-group-where.input';
import { OccupationGroupOrderByWithRelationInput } from './occupation-group-order-by-with-relation.input';
import { OccupationGroupWhereUniqueInput } from './occupation-group-where-unique.input';
import { OccupationGroupScalarFieldEnum } from './occupation-group-scalar-field.enum';

@ArgsType()
export class FindFirstOccupationGroupOrThrowArgs {
  @Field(() => OccupationGroupWhereInput, { nullable: true })
  @Type(() => OccupationGroupWhereInput)
  where?: OccupationGroupWhereInput;

  @Field(() => [OccupationGroupOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<OccupationGroupOrderByWithRelationInput>;

  @Field(() => OccupationGroupWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<OccupationGroupWhereUniqueInput, 'id' | 'code' | 'code'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [OccupationGroupScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof OccupationGroupScalarFieldEnum>;
}
