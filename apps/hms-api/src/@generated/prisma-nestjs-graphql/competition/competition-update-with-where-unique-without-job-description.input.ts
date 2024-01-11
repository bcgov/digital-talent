import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionUpdateWithoutJob_descriptionInput } from './competition-update-without-job-description.input';

@InputType()
export class CompetitionUpdateWithWhereUniqueWithoutJob_descriptionInput {
  @Field(() => CompetitionWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;

  @Field(() => CompetitionUpdateWithoutJob_descriptionInput, { nullable: false })
  @Type(() => CompetitionUpdateWithoutJob_descriptionInput)
  data!: CompetitionUpdateWithoutJob_descriptionInput;
}
