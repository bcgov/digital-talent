import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClassificationUncheckedUpdateManyWithoutOccupation_groupNestedInput } from '../classification/classification-unchecked-update-many-without-occupation-group-nested.input';

@InputType()
export class OccupationGroupUncheckedUpdateInput {
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

  @Field(() => ClassificationUncheckedUpdateManyWithoutOccupation_groupNestedInput, { nullable: true })
  @Type(() => ClassificationUncheckedUpdateManyWithoutOccupation_groupNestedInput)
  classifications?: ClassificationUncheckedUpdateManyWithoutOccupation_groupNestedInput;
}
