import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ClassificationWhereUniqueInput } from './classification-where-unique.input';
import { ClassificationCreateWithoutGridInput } from './classification-create-without-grid.input';

@InputType()
export class ClassificationCreateOrConnectWithoutGridInput {
  @Field(() => ClassificationWhereUniqueInput, { nullable: false })
  @Type(() => ClassificationWhereUniqueInput)
  where!: Prisma.AtLeast<ClassificationWhereUniqueInput, 'id'>;

  @Field(() => ClassificationCreateWithoutGridInput, { nullable: false })
  @Type(() => ClassificationCreateWithoutGridInput)
  create!: ClassificationCreateWithoutGridInput;
}
