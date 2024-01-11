import { Field, ArgsType, HideField, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationWhereInput } from './application-where.input';
import { ApplicationOrderByWithRelationInput } from './application-order-by-with-relation.input';
import { ApplicationWhereUniqueInput } from './application-where-unique.input';
import { ApplicationScalarFieldEnum } from './application-scalar-field.enum';

@ArgsType()
export class FindManyApplicationArgs {
  @Field(() => ApplicationWhereInput, { nullable: true })
  @Type(() => ApplicationWhereInput)
  where?: ApplicationWhereInput;

  @Field(() => [ApplicationOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ApplicationOrderByWithRelationInput>;

  @HideField()
  cursor?: Prisma.AtLeast<ApplicationWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @HideField()
  distinct?: Array<keyof typeof ApplicationScalarFieldEnum>;
}
