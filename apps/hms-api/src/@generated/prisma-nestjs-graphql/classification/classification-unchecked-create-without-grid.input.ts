import { Field, InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal, transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform, Type } from 'class-transformer';
import { JobDescriptionUncheckedCreateNestedManyWithoutClassificationInput } from '../job-description/job-description-unchecked-create-nested-many-without-classification.input';

@InputType()
export class ClassificationUncheckedCreateWithoutGridInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  occupation_group_id!: string;

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

  @Field(() => JobDescriptionUncheckedCreateNestedManyWithoutClassificationInput, { nullable: true })
  @Type(() => JobDescriptionUncheckedCreateNestedManyWithoutClassificationInput)
  job_descriptions?: JobDescriptionUncheckedCreateNestedManyWithoutClassificationInput;
}
