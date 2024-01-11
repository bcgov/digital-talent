import { Field, ArgsType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ClassificationWhereInput } from './classification-where.input';
import { ClassificationOrderByWithRelationInput } from './classification-order-by-with-relation.input';
import { ClassificationWhereUniqueInput } from './classification-where-unique.input';
import { ClassificationScalarFieldEnum } from './classification-scalar-field.enum';

@ArgsType()
export class FindFirstClassificationOrThrowArgs {
  @Field(() => ClassificationWhereInput, { nullable: true })
  @Type(() => ClassificationWhereInput)
  where?: ClassificationWhereInput;

  @Field(() => [ClassificationOrderByWithRelationInput], { nullable: true })
  @Type(() => ClassificationOrderByWithRelationInput)
  orderBy?: Array<ClassificationOrderByWithRelationInput>;

  @Field(() => ClassificationWhereUniqueInput, { nullable: true })
  @Type(() => ClassificationWhereUniqueInput)
  cursor?: Prisma.AtLeast<ClassificationWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ClassificationScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ClassificationScalarFieldEnum>;
}
