import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { JobDescriptionWhereUniqueInput } from './job-description-where-unique.input';
import { JobDescriptionCreateInput } from './job-description-create.input';
import { JobDescriptionUpdateInput } from './job-description-update.input';

@ArgsType()
export class UpsertOneJobDescriptionArgs {
  @Field(() => JobDescriptionWhereUniqueInput, { nullable: false })
  @Type(() => JobDescriptionWhereUniqueInput)
  where!: Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>;

  @Field(() => JobDescriptionCreateInput, { nullable: false })
  @Type(() => JobDescriptionCreateInput)
  create!: JobDescriptionCreateInput;

  @Field(() => JobDescriptionUpdateInput, { nullable: false })
  @Type(() => JobDescriptionUpdateInput)
  update!: JobDescriptionUpdateInput;
}
