import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ClassificationWhereUniqueInput } from './classification-where-unique.input';
import { ClassificationCreateWithoutOccupation_groupInput } from './classification-create-without-occupation-group.input';

@InputType()
export class ClassificationCreateOrConnectWithoutOccupation_groupInput {
  @Field(() => ClassificationWhereUniqueInput, { nullable: false })
  @Type(() => ClassificationWhereUniqueInput)
  where!: Prisma.AtLeast<ClassificationWhereUniqueInput, 'id'>;

  @Field(() => ClassificationCreateWithoutOccupation_groupInput, { nullable: false })
  @Type(() => ClassificationCreateWithoutOccupation_groupInput)
  create!: ClassificationCreateWithoutOccupation_groupInput;
}
