import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ClassificationCreateWithoutJob_descriptionsInput } from './classification-create-without-job-descriptions.input';
import { ClassificationCreateOrConnectWithoutJob_descriptionsInput } from './classification-create-or-connect-without-job-descriptions.input';
import { ClassificationUpsertWithoutJob_descriptionsInput } from './classification-upsert-without-job-descriptions.input';
import { ClassificationWhereUniqueInput } from './classification-where-unique.input';
import { ClassificationUpdateToOneWithWhereWithoutJob_descriptionsInput } from './classification-update-to-one-with-where-without-job-descriptions.input';

@InputType()
export class ClassificationUpdateOneRequiredWithoutJob_descriptionsNestedInput {
  @Field(() => ClassificationCreateWithoutJob_descriptionsInput, { nullable: true })
  @Type(() => ClassificationCreateWithoutJob_descriptionsInput)
  create?: ClassificationCreateWithoutJob_descriptionsInput;

  @Field(() => ClassificationCreateOrConnectWithoutJob_descriptionsInput, { nullable: true })
  @Type(() => ClassificationCreateOrConnectWithoutJob_descriptionsInput)
  connectOrCreate?: ClassificationCreateOrConnectWithoutJob_descriptionsInput;

  @Field(() => ClassificationUpsertWithoutJob_descriptionsInput, { nullable: true })
  @Type(() => ClassificationUpsertWithoutJob_descriptionsInput)
  upsert?: ClassificationUpsertWithoutJob_descriptionsInput;

  @Field(() => ClassificationWhereUniqueInput, { nullable: true })
  @Type(() => ClassificationWhereUniqueInput)
  connect?: Prisma.AtLeast<ClassificationWhereUniqueInput, 'id'>;

  @Field(() => ClassificationUpdateToOneWithWhereWithoutJob_descriptionsInput, { nullable: true })
  @Type(() => ClassificationUpdateToOneWithWhereWithoutJob_descriptionsInput)
  update?: ClassificationUpdateToOneWithWhereWithoutJob_descriptionsInput;
}
