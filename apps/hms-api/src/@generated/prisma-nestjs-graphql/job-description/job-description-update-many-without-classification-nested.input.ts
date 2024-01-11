import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { JobDescriptionCreateWithoutClassificationInput } from './job-description-create-without-classification.input';
import { JobDescriptionCreateOrConnectWithoutClassificationInput } from './job-description-create-or-connect-without-classification.input';
import { JobDescriptionUpsertWithWhereUniqueWithoutClassificationInput } from './job-description-upsert-with-where-unique-without-classification.input';
import { JobDescriptionCreateManyClassificationInputEnvelope } from './job-description-create-many-classification-input-envelope.input';
import { JobDescriptionWhereUniqueInput } from './job-description-where-unique.input';
import { JobDescriptionUpdateWithWhereUniqueWithoutClassificationInput } from './job-description-update-with-where-unique-without-classification.input';
import { JobDescriptionUpdateManyWithWhereWithoutClassificationInput } from './job-description-update-many-with-where-without-classification.input';
import { JobDescriptionScalarWhereInput } from './job-description-scalar-where.input';

@InputType()
export class JobDescriptionUpdateManyWithoutClassificationNestedInput {
  @Field(() => [JobDescriptionCreateWithoutClassificationInput], { nullable: true })
  @Type(() => JobDescriptionCreateWithoutClassificationInput)
  create?: Array<JobDescriptionCreateWithoutClassificationInput>;

  @Field(() => [JobDescriptionCreateOrConnectWithoutClassificationInput], { nullable: true })
  @Type(() => JobDescriptionCreateOrConnectWithoutClassificationInput)
  connectOrCreate?: Array<JobDescriptionCreateOrConnectWithoutClassificationInput>;

  @Field(() => [JobDescriptionUpsertWithWhereUniqueWithoutClassificationInput], { nullable: true })
  @Type(() => JobDescriptionUpsertWithWhereUniqueWithoutClassificationInput)
  upsert?: Array<JobDescriptionUpsertWithWhereUniqueWithoutClassificationInput>;

  @Field(() => JobDescriptionCreateManyClassificationInputEnvelope, { nullable: true })
  @Type(() => JobDescriptionCreateManyClassificationInputEnvelope)
  createMany?: JobDescriptionCreateManyClassificationInputEnvelope;

  @Field(() => [JobDescriptionWhereUniqueInput], { nullable: true })
  @Type(() => JobDescriptionWhereUniqueInput)
  set?: Array<Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>>;

  @Field(() => [JobDescriptionWhereUniqueInput], { nullable: true })
  @Type(() => JobDescriptionWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>>;

  @Field(() => [JobDescriptionWhereUniqueInput], { nullable: true })
  @Type(() => JobDescriptionWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>>;

  @Field(() => [JobDescriptionWhereUniqueInput], { nullable: true })
  @Type(() => JobDescriptionWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>>;

  @Field(() => [JobDescriptionUpdateWithWhereUniqueWithoutClassificationInput], { nullable: true })
  @Type(() => JobDescriptionUpdateWithWhereUniqueWithoutClassificationInput)
  update?: Array<JobDescriptionUpdateWithWhereUniqueWithoutClassificationInput>;

  @Field(() => [JobDescriptionUpdateManyWithWhereWithoutClassificationInput], { nullable: true })
  @Type(() => JobDescriptionUpdateManyWithWhereWithoutClassificationInput)
  updateMany?: Array<JobDescriptionUpdateManyWithWhereWithoutClassificationInput>;

  @Field(() => [JobDescriptionScalarWhereInput], { nullable: true })
  @Type(() => JobDescriptionScalarWhereInput)
  deleteMany?: Array<JobDescriptionScalarWhereInput>;
}
