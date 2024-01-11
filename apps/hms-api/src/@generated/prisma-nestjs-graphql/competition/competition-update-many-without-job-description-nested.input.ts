import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutJob_descriptionInput } from './competition-create-without-job-description.input';
import { CompetitionCreateOrConnectWithoutJob_descriptionInput } from './competition-create-or-connect-without-job-description.input';
import { CompetitionUpsertWithWhereUniqueWithoutJob_descriptionInput } from './competition-upsert-with-where-unique-without-job-description.input';
import { CompetitionCreateManyJob_descriptionInputEnvelope } from './competition-create-many-job-description-input-envelope.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionUpdateWithWhereUniqueWithoutJob_descriptionInput } from './competition-update-with-where-unique-without-job-description.input';
import { CompetitionUpdateManyWithWhereWithoutJob_descriptionInput } from './competition-update-many-with-where-without-job-description.input';
import { CompetitionScalarWhereInput } from './competition-scalar-where.input';

@InputType()
export class CompetitionUpdateManyWithoutJob_descriptionNestedInput {
  @Field(() => [CompetitionCreateWithoutJob_descriptionInput], { nullable: true })
  @Type(() => CompetitionCreateWithoutJob_descriptionInput)
  create?: Array<CompetitionCreateWithoutJob_descriptionInput>;

  @Field(() => [CompetitionCreateOrConnectWithoutJob_descriptionInput], { nullable: true })
  @Type(() => CompetitionCreateOrConnectWithoutJob_descriptionInput)
  connectOrCreate?: Array<CompetitionCreateOrConnectWithoutJob_descriptionInput>;

  @Field(() => [CompetitionUpsertWithWhereUniqueWithoutJob_descriptionInput], { nullable: true })
  @Type(() => CompetitionUpsertWithWhereUniqueWithoutJob_descriptionInput)
  upsert?: Array<CompetitionUpsertWithWhereUniqueWithoutJob_descriptionInput>;

  @Field(() => CompetitionCreateManyJob_descriptionInputEnvelope, { nullable: true })
  @Type(() => CompetitionCreateManyJob_descriptionInputEnvelope)
  createMany?: CompetitionCreateManyJob_descriptionInputEnvelope;

  @Field(() => [CompetitionWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionWhereUniqueInput)
  set?: Array<Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>>;

  @Field(() => [CompetitionWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>>;

  @Field(() => [CompetitionWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>>;

  @Field(() => [CompetitionWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>>;

  @Field(() => [CompetitionUpdateWithWhereUniqueWithoutJob_descriptionInput], { nullable: true })
  @Type(() => CompetitionUpdateWithWhereUniqueWithoutJob_descriptionInput)
  update?: Array<CompetitionUpdateWithWhereUniqueWithoutJob_descriptionInput>;

  @Field(() => [CompetitionUpdateManyWithWhereWithoutJob_descriptionInput], { nullable: true })
  @Type(() => CompetitionUpdateManyWithWhereWithoutJob_descriptionInput)
  updateMany?: Array<CompetitionUpdateManyWithWhereWithoutJob_descriptionInput>;

  @Field(() => [CompetitionScalarWhereInput], { nullable: true })
  @Type(() => CompetitionScalarWhereInput)
  deleteMany?: Array<CompetitionScalarWhereInput>;
}
