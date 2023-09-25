import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { GridCreateWithoutClassificationsInput } from './grid-create-without-classifications.input';
import { GridCreateOrConnectWithoutClassificationsInput } from './grid-create-or-connect-without-classifications.input';
import { GridWhereUniqueInput } from './grid-where-unique.input';

@InputType()
export class GridCreateNestedOneWithoutClassificationsInput {
  @Field(() => GridCreateWithoutClassificationsInput, { nullable: true })
  @Type(() => GridCreateWithoutClassificationsInput)
  create?: GridCreateWithoutClassificationsInput;

  @Field(() => GridCreateOrConnectWithoutClassificationsInput, { nullable: true })
  @Type(() => GridCreateOrConnectWithoutClassificationsInput)
  connectOrCreate?: GridCreateOrConnectWithoutClassificationsInput;

  @Field(() => GridWhereUniqueInput, { nullable: true })
  @Type(() => GridWhereUniqueInput)
  connect?: Prisma.AtLeast<GridWhereUniqueInput, 'id'>;
}
