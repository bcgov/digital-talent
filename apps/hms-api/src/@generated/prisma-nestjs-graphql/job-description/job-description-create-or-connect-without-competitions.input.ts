import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { JobDescriptionWhereUniqueInput } from './job-description-where-unique.input';
import { JobDescriptionCreateWithoutCompetitionsInput } from './job-description-create-without-competitions.input';

@InputType()
export class JobDescriptionCreateOrConnectWithoutCompetitionsInput {
  @Field(() => JobDescriptionWhereUniqueInput, { nullable: false })
  @Type(() => JobDescriptionWhereUniqueInput)
  where!: Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>;

  @Field(() => JobDescriptionCreateWithoutCompetitionsInput, { nullable: false })
  @Type(() => JobDescriptionCreateWithoutCompetitionsInput)
  create!: JobDescriptionCreateWithoutCompetitionsInput;
}
