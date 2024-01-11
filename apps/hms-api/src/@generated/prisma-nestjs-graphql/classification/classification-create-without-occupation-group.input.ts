import { Field, InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal, transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform, Type } from 'class-transformer';
import { JobDescriptionCreateNestedManyWithoutClassificationInput } from '../job-description/job-description-create-nested-many-without-classification.input';
import { GridCreateNestedOneWithoutClassificationsInput } from '../grid/grid-create-nested-one-without-classifications.input';

@InputType()
export class ClassificationCreateWithoutOccupation_groupInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  rate_adjustment?: Decimal;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => JobDescriptionCreateNestedManyWithoutClassificationInput, { nullable: true })
  @Type(() => JobDescriptionCreateNestedManyWithoutClassificationInput)
  job_descriptions?: JobDescriptionCreateNestedManyWithoutClassificationInput;

  @Field(() => GridCreateNestedOneWithoutClassificationsInput, { nullable: false })
  @Type(() => GridCreateNestedOneWithoutClassificationsInput)
  grid!: GridCreateNestedOneWithoutClassificationsInput;
}
