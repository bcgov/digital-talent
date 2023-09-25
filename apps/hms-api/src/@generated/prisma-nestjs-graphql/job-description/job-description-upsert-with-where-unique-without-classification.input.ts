import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { JobDescriptionWhereUniqueInput } from './job-description-where-unique.input';
import { JobDescriptionUpdateWithoutClassificationInput } from './job-description-update-without-classification.input';
import { JobDescriptionCreateWithoutClassificationInput } from './job-description-create-without-classification.input';

@InputType()
export class JobDescriptionUpsertWithWhereUniqueWithoutClassificationInput {
  @Field(() => JobDescriptionWhereUniqueInput, { nullable: false })
  @Type(() => JobDescriptionWhereUniqueInput)
  where!: Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>;

  @Field(() => JobDescriptionUpdateWithoutClassificationInput, { nullable: false })
  @Type(() => JobDescriptionUpdateWithoutClassificationInput)
  update!: JobDescriptionUpdateWithoutClassificationInput;

  @Field(() => JobDescriptionCreateWithoutClassificationInput, { nullable: false })
  @Type(() => JobDescriptionCreateWithoutClassificationInput)
  create!: JobDescriptionCreateWithoutClassificationInput;
}
