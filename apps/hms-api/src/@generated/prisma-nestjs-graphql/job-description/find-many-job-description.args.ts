import { ArgsType, Field, HideField, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { JobDescriptionOrderByWithRelationInput } from './job-description-order-by-with-relation.input';
import { JobDescriptionScalarFieldEnum } from './job-description-scalar-field.enum';
import { JobDescriptionWhereUniqueInput } from './job-description-where-unique.input';
import { JobDescriptionWhereInput } from './job-description-where.input';

@ArgsType()
export class FindManyJobDescriptionArgs {
  @Field(() => JobDescriptionWhereInput, { nullable: true })
  @Type(() => JobDescriptionWhereInput)
  where?: JobDescriptionWhereInput;

  @Field(() => [JobDescriptionOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<JobDescriptionOrderByWithRelationInput>;

  @HideField()
  cursor?: Prisma.AtLeast<JobDescriptionWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @HideField()
  distinct?: Array<keyof typeof JobDescriptionScalarFieldEnum>;
}
