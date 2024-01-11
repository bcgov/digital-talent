import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ClassificationWhereUniqueInput } from './classification-where-unique.input';
import { ClassificationUpdateWithoutGridInput } from './classification-update-without-grid.input';
import { ClassificationCreateWithoutGridInput } from './classification-create-without-grid.input';

@InputType()
export class ClassificationUpsertWithWhereUniqueWithoutGridInput {
  @Field(() => ClassificationWhereUniqueInput, { nullable: false })
  @Type(() => ClassificationWhereUniqueInput)
  where!: Prisma.AtLeast<ClassificationWhereUniqueInput, 'id'>;

  @Field(() => ClassificationUpdateWithoutGridInput, { nullable: false })
  @Type(() => ClassificationUpdateWithoutGridInput)
  update!: ClassificationUpdateWithoutGridInput;

  @Field(() => ClassificationCreateWithoutGridInput, { nullable: false })
  @Type(() => ClassificationCreateWithoutGridInput)
  create!: ClassificationCreateWithoutGridInput;
}
