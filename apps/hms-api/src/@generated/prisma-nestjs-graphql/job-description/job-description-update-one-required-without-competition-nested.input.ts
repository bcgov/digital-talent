import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { JobDescriptionCreateWithoutCompetitionInput } from './job-description-create-without-competition.input';
import { JobDescriptionCreateOrConnectWithoutCompetitionInput } from './job-description-create-or-connect-without-competition.input';
import { JobDescriptionUpsertWithoutCompetitionInput } from './job-description-upsert-without-competition.input';
import { JobDescriptionWhereUniqueInput } from './job-description-where-unique.input';
import { JobDescriptionUpdateToOneWithWhereWithoutCompetitionInput } from './job-description-update-to-one-with-where-without-competition.input';

@InputType()
export class JobDescriptionUpdateOneRequiredWithoutCompetitionNestedInput {
  @Field(() => JobDescriptionCreateWithoutCompetitionInput, { nullable: true })
  @Type(() => JobDescriptionCreateWithoutCompetitionInput)
  create?: JobDescriptionCreateWithoutCompetitionInput;

  @Field(() => JobDescriptionCreateOrConnectWithoutCompetitionInput, { nullable: true })
  @Type(() => JobDescriptionCreateOrConnectWithoutCompetitionInput)
  connectOrCreate?: JobDescriptionCreateOrConnectWithoutCompetitionInput;

  @Field(() => JobDescriptionUpsertWithoutCompetitionInput, { nullable: true })
  @Type(() => JobDescriptionUpsertWithoutCompetitionInput)
  upsert?: JobDescriptionUpsertWithoutCompetitionInput;

  @Field(() => JobDescriptionWhereUniqueInput, { nullable: true })
  @Type(() => JobDescriptionWhereUniqueInput)
  connect?: Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>;

  @Field(() => JobDescriptionUpdateToOneWithWhereWithoutCompetitionInput, { nullable: true })
  @Type(() => JobDescriptionUpdateToOneWithWhereWithoutCompetitionInput)
  update?: JobDescriptionUpdateToOneWithWhereWithoutCompetitionInput;
}
