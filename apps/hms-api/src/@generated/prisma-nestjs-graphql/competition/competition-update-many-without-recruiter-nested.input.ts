import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutRecruiterInput } from './competition-create-without-recruiter.input';
import { CompetitionCreateOrConnectWithoutRecruiterInput } from './competition-create-or-connect-without-recruiter.input';
import { CompetitionUpsertWithWhereUniqueWithoutRecruiterInput } from './competition-upsert-with-where-unique-without-recruiter.input';
import { CompetitionCreateManyRecruiterInputEnvelope } from './competition-create-many-recruiter-input-envelope.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionUpdateWithWhereUniqueWithoutRecruiterInput } from './competition-update-with-where-unique-without-recruiter.input';
import { CompetitionUpdateManyWithWhereWithoutRecruiterInput } from './competition-update-many-with-where-without-recruiter.input';
import { CompetitionScalarWhereInput } from './competition-scalar-where.input';

@InputType()
export class CompetitionUpdateManyWithoutRecruiterNestedInput {
  @Field(() => [CompetitionCreateWithoutRecruiterInput], { nullable: true })
  @Type(() => CompetitionCreateWithoutRecruiterInput)
  create?: Array<CompetitionCreateWithoutRecruiterInput>;

  @Field(() => [CompetitionCreateOrConnectWithoutRecruiterInput], { nullable: true })
  @Type(() => CompetitionCreateOrConnectWithoutRecruiterInput)
  connectOrCreate?: Array<CompetitionCreateOrConnectWithoutRecruiterInput>;

  @Field(() => [CompetitionUpsertWithWhereUniqueWithoutRecruiterInput], { nullable: true })
  @Type(() => CompetitionUpsertWithWhereUniqueWithoutRecruiterInput)
  upsert?: Array<CompetitionUpsertWithWhereUniqueWithoutRecruiterInput>;

  @Field(() => CompetitionCreateManyRecruiterInputEnvelope, { nullable: true })
  @Type(() => CompetitionCreateManyRecruiterInputEnvelope)
  createMany?: CompetitionCreateManyRecruiterInputEnvelope;

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

  @Field(() => [CompetitionUpdateWithWhereUniqueWithoutRecruiterInput], { nullable: true })
  @Type(() => CompetitionUpdateWithWhereUniqueWithoutRecruiterInput)
  update?: Array<CompetitionUpdateWithWhereUniqueWithoutRecruiterInput>;

  @Field(() => [CompetitionUpdateManyWithWhereWithoutRecruiterInput], { nullable: true })
  @Type(() => CompetitionUpdateManyWithWhereWithoutRecruiterInput)
  updateMany?: Array<CompetitionUpdateManyWithWhereWithoutRecruiterInput>;

  @Field(() => [CompetitionScalarWhereInput], { nullable: true })
  @Type(() => CompetitionScalarWhereInput)
  deleteMany?: Array<CompetitionScalarWhereInput>;
}
