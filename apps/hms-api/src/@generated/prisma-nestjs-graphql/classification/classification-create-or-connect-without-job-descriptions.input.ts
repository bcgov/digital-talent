import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ClassificationWhereUniqueInput } from './classification-where-unique.input';
import { ClassificationCreateWithoutJob_descriptionsInput } from './classification-create-without-job-descriptions.input';

@InputType()
export class ClassificationCreateOrConnectWithoutJob_descriptionsInput {
  @Field(() => ClassificationWhereUniqueInput, { nullable: false })
  @Type(() => ClassificationWhereUniqueInput)
  where!: Prisma.AtLeast<ClassificationWhereUniqueInput, 'id'>;

  @Field(() => ClassificationCreateWithoutJob_descriptionsInput, { nullable: false })
  @Type(() => ClassificationCreateWithoutJob_descriptionsInput)
  create!: ClassificationCreateWithoutJob_descriptionsInput;
}
