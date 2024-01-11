import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LocationWhereInput } from './location-where.input';
import { LocationOrderByWithRelationInput } from './location-order-by-with-relation.input';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { LocationScalarFieldEnum } from './location-scalar-field.enum';

@ArgsType()
export class FindFirstLocationOrThrowArgs {
  @Field(() => LocationWhereInput, { nullable: true })
  @Type(() => LocationWhereInput)
  where?: LocationWhereInput;

  @Field(() => [LocationOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<LocationOrderByWithRelationInput>;

  @Field(() => LocationWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<LocationWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [LocationScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof LocationScalarFieldEnum>;
}
