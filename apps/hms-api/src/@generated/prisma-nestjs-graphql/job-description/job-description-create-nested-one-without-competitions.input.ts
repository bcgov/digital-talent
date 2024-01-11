import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { JobDescriptionCreateWithoutCompetitionsInput } from './job-description-create-without-competitions.input';
import { JobDescriptionCreateOrConnectWithoutCompetitionsInput } from './job-description-create-or-connect-without-competitions.input';
import { JobDescriptionWhereUniqueInput } from './job-description-where-unique.input';

@InputType()
export class JobDescriptionCreateNestedOneWithoutCompetitionsInput {
  @Field(() => JobDescriptionCreateWithoutCompetitionsInput, { nullable: true })
  @Type(() => JobDescriptionCreateWithoutCompetitionsInput)
  create?: JobDescriptionCreateWithoutCompetitionsInput;

  @Field(() => JobDescriptionCreateOrConnectWithoutCompetitionsInput, { nullable: true })
  @Type(() => JobDescriptionCreateOrConnectWithoutCompetitionsInput)
  connectOrCreate?: JobDescriptionCreateOrConnectWithoutCompetitionsInput;

  @Field(() => JobDescriptionWhereUniqueInput, { nullable: true })
  @Type(() => JobDescriptionWhereUniqueInput)
  connect?: Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>;
}
