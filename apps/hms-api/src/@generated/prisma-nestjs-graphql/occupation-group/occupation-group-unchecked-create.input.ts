import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClassificationUncheckedCreateNestedManyWithoutOccupation_groupInput } from '../classification/classification-unchecked-create-nested-many-without-occupation-group.input';

@InputType()
export class OccupationGroupUncheckedCreateInput {
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

  @Field(() => ClassificationUncheckedCreateNestedManyWithoutOccupation_groupInput, { nullable: true })
  @Type(() => ClassificationUncheckedCreateNestedManyWithoutOccupation_groupInput)
  classifications?: ClassificationUncheckedCreateNestedManyWithoutOccupation_groupInput;
}
