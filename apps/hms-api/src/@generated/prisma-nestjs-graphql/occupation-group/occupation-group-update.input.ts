import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClassificationUpdateManyWithoutOccupation_groupNestedInput } from '../classification/classification-update-many-without-occupation-group-nested.input';

@InputType()
export class OccupationGroupUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  code?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ClassificationUpdateManyWithoutOccupation_groupNestedInput, { nullable: true })
  @Type(() => ClassificationUpdateManyWithoutOccupation_groupNestedInput)
  classifications?: ClassificationUpdateManyWithoutOccupation_groupNestedInput;
}
