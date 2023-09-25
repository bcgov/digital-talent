import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClassificationCreateNestedManyWithoutOccupation_groupInput } from '../classification/classification-create-nested-many-without-occupation-group.input';

@InputType()
export class OccupationGroupCreateInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ClassificationCreateNestedManyWithoutOccupation_groupInput, { nullable: true })
  @Type(() => ClassificationCreateNestedManyWithoutOccupation_groupInput)
  classifications?: ClassificationCreateNestedManyWithoutOccupation_groupInput;
}
