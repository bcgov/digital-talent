import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutJob_descriptionInput } from './competition-create-without-job-description.input';
import { CompetitionCreateOrConnectWithoutJob_descriptionInput } from './competition-create-or-connect-without-job-description.input';
import { CompetitionCreateManyJob_descriptionInputEnvelope } from './competition-create-many-job-description-input-envelope.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';

@InputType()
export class CompetitionUncheckedCreateNestedManyWithoutJob_descriptionInput {
  @Field(() => [CompetitionCreateWithoutJob_descriptionInput], { nullable: true })
  @Type(() => CompetitionCreateWithoutJob_descriptionInput)
  create?: Array<CompetitionCreateWithoutJob_descriptionInput>;

  @Field(() => [CompetitionCreateOrConnectWithoutJob_descriptionInput], { nullable: true })
  @Type(() => CompetitionCreateOrConnectWithoutJob_descriptionInput)
  connectOrCreate?: Array<CompetitionCreateOrConnectWithoutJob_descriptionInput>;

  @Field(() => CompetitionCreateManyJob_descriptionInputEnvelope, { nullable: true })
  @Type(() => CompetitionCreateManyJob_descriptionInputEnvelope)
  createMany?: CompetitionCreateManyJob_descriptionInputEnvelope;

  @Field(() => [CompetitionWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>>;
}
