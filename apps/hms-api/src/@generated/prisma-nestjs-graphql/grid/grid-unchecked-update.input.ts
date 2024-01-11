import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Type } from 'class-transformer';
import { ClassificationUncheckedUpdateManyWithoutGridNestedInput } from '../classification/classification-unchecked-update-many-without-grid-nested.input';

@InputType()
export class GridUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [GraphQLJSON], { nullable: true })
  steps?: Array<any>;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ClassificationUncheckedUpdateManyWithoutGridNestedInput, { nullable: true })
  @Type(() => ClassificationUncheckedUpdateManyWithoutGridNestedInput)
  classifications?: ClassificationUncheckedUpdateManyWithoutGridNestedInput;
}
