import { Field, ArgsType, HideField, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { JobDescriptionWhereInput } from './job-description-where.input';
import { JobDescriptionOrderByWithRelationInput } from './job-description-order-by-with-relation.input';
import { JobDescriptionWhereUniqueInput } from './job-description-where-unique.input';
import { JobDescriptionScalarFieldEnum } from './job-description-scalar-field.enum';

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
