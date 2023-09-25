import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { JobDescriptionWhereUniqueInput } from './job-description-where-unique.input';
import { JobDescriptionCreateWithoutCompetitionInput } from './job-description-create-without-competition.input';

@InputType()
export class JobDescriptionCreateOrConnectWithoutCompetitionInput {
  @Field(() => JobDescriptionWhereUniqueInput, { nullable: false })
  @Type(() => JobDescriptionWhereUniqueInput)
  where!: Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>;

  @Field(() => JobDescriptionCreateWithoutCompetitionInput, { nullable: false })
  @Type(() => JobDescriptionCreateWithoutCompetitionInput)
  create!: JobDescriptionCreateWithoutCompetitionInput;
}
