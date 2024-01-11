import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ClassificationCreateWithoutJob_descriptionsInput } from './classification-create-without-job-descriptions.input';
import { ClassificationCreateOrConnectWithoutJob_descriptionsInput } from './classification-create-or-connect-without-job-descriptions.input';
import { ClassificationWhereUniqueInput } from './classification-where-unique.input';

@InputType()
export class ClassificationCreateNestedOneWithoutJob_descriptionsInput {
  @Field(() => ClassificationCreateWithoutJob_descriptionsInput, { nullable: true })
  @Type(() => ClassificationCreateWithoutJob_descriptionsInput)
  create?: ClassificationCreateWithoutJob_descriptionsInput;

  @Field(() => ClassificationCreateOrConnectWithoutJob_descriptionsInput, { nullable: true })
  @Type(() => ClassificationCreateOrConnectWithoutJob_descriptionsInput)
  connectOrCreate?: ClassificationCreateOrConnectWithoutJob_descriptionsInput;

  @Field(() => ClassificationWhereUniqueInput, { nullable: true })
  @Type(() => ClassificationWhereUniqueInput)
  connect?: Prisma.AtLeast<ClassificationWhereUniqueInput, 'id'>;
}
