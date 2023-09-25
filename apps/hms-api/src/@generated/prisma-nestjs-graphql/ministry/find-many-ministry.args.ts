import { Field, ArgsType, HideField, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MinistryWhereInput } from './ministry-where.input';
import { MinistryOrderByWithRelationInput } from './ministry-order-by-with-relation.input';
import { MinistryWhereUniqueInput } from './ministry-where-unique.input';
import { MinistryScalarFieldEnum } from './ministry-scalar-field.enum';

@ArgsType()
export class FindManyMinistryArgs {
  @Field(() => MinistryWhereInput, { nullable: true })
  @Type(() => MinistryWhereInput)
  where?: MinistryWhereInput;

  @Field(() => [MinistryOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<MinistryOrderByWithRelationInput>;

  @HideField()
  cursor?: Prisma.AtLeast<MinistryWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @HideField()
  distinct?: Array<keyof typeof MinistryScalarFieldEnum>;
}
