import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { JobDescriptionCreateWithoutCompetitionsInput } from './job-description-create-without-competitions.input';
import { JobDescriptionCreateOrConnectWithoutCompetitionsInput } from './job-description-create-or-connect-without-competitions.input';
import { JobDescriptionUpsertWithoutCompetitionsInput } from './job-description-upsert-without-competitions.input';
import { JobDescriptionWhereUniqueInput } from './job-description-where-unique.input';
import { JobDescriptionUpdateToOneWithWhereWithoutCompetitionsInput } from './job-description-update-to-one-with-where-without-competitions.input';

@InputType()
export class JobDescriptionUpdateOneRequiredWithoutCompetitionsNestedInput {
  @Field(() => JobDescriptionCreateWithoutCompetitionsInput, { nullable: true })
  @Type(() => JobDescriptionCreateWithoutCompetitionsInput)
  create?: JobDescriptionCreateWithoutCompetitionsInput;

  @Field(() => JobDescriptionCreateOrConnectWithoutCompetitionsInput, { nullable: true })
  @Type(() => JobDescriptionCreateOrConnectWithoutCompetitionsInput)
  connectOrCreate?: JobDescriptionCreateOrConnectWithoutCompetitionsInput;

  @Field(() => JobDescriptionUpsertWithoutCompetitionsInput, { nullable: true })
  @Type(() => JobDescriptionUpsertWithoutCompetitionsInput)
  upsert?: JobDescriptionUpsertWithoutCompetitionsInput;

  @Field(() => JobDescriptionWhereUniqueInput, { nullable: true })
  @Type(() => JobDescriptionWhereUniqueInput)
  connect?: Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>;

  @Field(() => JobDescriptionUpdateToOneWithWhereWithoutCompetitionsInput, { nullable: true })
  @Type(() => JobDescriptionUpdateToOneWithWhereWithoutCompetitionsInput)
  update?: JobDescriptionUpdateToOneWithWhereWithoutCompetitionsInput;
}
