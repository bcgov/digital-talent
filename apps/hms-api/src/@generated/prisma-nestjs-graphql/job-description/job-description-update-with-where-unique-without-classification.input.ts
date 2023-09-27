import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { JobDescriptionWhereUniqueInput } from './job-description-where-unique.input';
import { JobDescriptionUpdateWithoutClassificationInput } from './job-description-update-without-classification.input';

@InputType()
export class JobDescriptionUpdateWithWhereUniqueWithoutClassificationInput {
  @Field(() => JobDescriptionWhereUniqueInput, { nullable: false })
  @Type(() => JobDescriptionWhereUniqueInput)
  where!: Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>;

  @Field(() => JobDescriptionUpdateWithoutClassificationInput, { nullable: false })
  @Type(() => JobDescriptionUpdateWithoutClassificationInput)
  data!: JobDescriptionUpdateWithoutClassificationInput;
}
