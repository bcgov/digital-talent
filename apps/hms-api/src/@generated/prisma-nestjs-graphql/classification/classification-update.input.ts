import { Field, InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal, transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform, Type } from 'class-transformer';
import { JobDescriptionUpdateManyWithoutClassificationNestedInput } from '../job-description/job-description-update-many-without-classification-nested.input';
import { GridUpdateOneRequiredWithoutClassificationsNestedInput } from '../grid/grid-update-one-required-without-classifications-nested.input';
import { OccupationGroupUpdateOneRequiredWithoutClassificationsNestedInput } from '../occupation-group/occupation-group-update-one-required-without-classifications-nested.input';

@InputType()
export class ClassificationUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  rate_adjustment?: Decimal;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => JobDescriptionUpdateManyWithoutClassificationNestedInput, { nullable: true })
  @Type(() => JobDescriptionUpdateManyWithoutClassificationNestedInput)
  job_descriptions?: JobDescriptionUpdateManyWithoutClassificationNestedInput;

  @Field(() => GridUpdateOneRequiredWithoutClassificationsNestedInput, { nullable: true })
  @Type(() => GridUpdateOneRequiredWithoutClassificationsNestedInput)
  grid?: GridUpdateOneRequiredWithoutClassificationsNestedInput;

  @Field(() => OccupationGroupUpdateOneRequiredWithoutClassificationsNestedInput, { nullable: true })
  @Type(() => OccupationGroupUpdateOneRequiredWithoutClassificationsNestedInput)
  occupation_group?: OccupationGroupUpdateOneRequiredWithoutClassificationsNestedInput;
}
