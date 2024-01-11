import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionCreateWithoutJob_descriptionInput } from './competition-create-without-job-description.input';

@InputType()
export class CompetitionCreateOrConnectWithoutJob_descriptionInput {
  @Field(() => CompetitionWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;

  @Field(() => CompetitionCreateWithoutJob_descriptionInput, { nullable: false })
  @Type(() => CompetitionCreateWithoutJob_descriptionInput)
  create!: CompetitionCreateWithoutJob_descriptionInput;
}
