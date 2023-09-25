import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { JobDescriptionCreateWithoutCompetitionInput } from './job-description-create-without-competition.input';
import { JobDescriptionCreateOrConnectWithoutCompetitionInput } from './job-description-create-or-connect-without-competition.input';
import { JobDescriptionWhereUniqueInput } from './job-description-where-unique.input';

@InputType()
export class JobDescriptionCreateNestedOneWithoutCompetitionInput {
  @Field(() => JobDescriptionCreateWithoutCompetitionInput, { nullable: true })
  @Type(() => JobDescriptionCreateWithoutCompetitionInput)
  create?: JobDescriptionCreateWithoutCompetitionInput;

  @Field(() => JobDescriptionCreateOrConnectWithoutCompetitionInput, { nullable: true })
  @Type(() => JobDescriptionCreateOrConnectWithoutCompetitionInput)
  connectOrCreate?: JobDescriptionCreateOrConnectWithoutCompetitionInput;

  @Field(() => JobDescriptionWhereUniqueInput, { nullable: true })
  @Type(() => JobDescriptionWhereUniqueInput)
  connect?: Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>;
}
