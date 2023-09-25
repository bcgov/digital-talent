import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { JobDescriptionUpdateInput } from './job-description-update.input';
import { JobDescriptionWhereUniqueInput } from './job-description-where-unique.input';

@ArgsType()
export class UpdateOneJobDescriptionArgs {
  @Field(() => JobDescriptionUpdateInput, { nullable: false })
  @Type(() => JobDescriptionUpdateInput)
  data!: JobDescriptionUpdateInput;

  @Field(() => JobDescriptionWhereUniqueInput, { nullable: false })
  @Type(() => JobDescriptionWhereUniqueInput)
  where!: Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>;
}
