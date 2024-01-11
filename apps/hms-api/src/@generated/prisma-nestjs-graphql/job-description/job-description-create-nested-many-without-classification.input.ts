import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { JobDescriptionCreateWithoutClassificationInput } from './job-description-create-without-classification.input';
import { JobDescriptionCreateOrConnectWithoutClassificationInput } from './job-description-create-or-connect-without-classification.input';
import { JobDescriptionCreateManyClassificationInputEnvelope } from './job-description-create-many-classification-input-envelope.input';
import { JobDescriptionWhereUniqueInput } from './job-description-where-unique.input';

@InputType()
export class JobDescriptionCreateNestedManyWithoutClassificationInput {
  @Field(() => [JobDescriptionCreateWithoutClassificationInput], { nullable: true })
  @Type(() => JobDescriptionCreateWithoutClassificationInput)
  create?: Array<JobDescriptionCreateWithoutClassificationInput>;

  @Field(() => [JobDescriptionCreateOrConnectWithoutClassificationInput], { nullable: true })
  @Type(() => JobDescriptionCreateOrConnectWithoutClassificationInput)
  connectOrCreate?: Array<JobDescriptionCreateOrConnectWithoutClassificationInput>;

  @Field(() => JobDescriptionCreateManyClassificationInputEnvelope, { nullable: true })
  @Type(() => JobDescriptionCreateManyClassificationInputEnvelope)
  createMany?: JobDescriptionCreateManyClassificationInputEnvelope;

  @Field(() => [JobDescriptionWhereUniqueInput], { nullable: true })
  @Type(() => JobDescriptionWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>>;
}
