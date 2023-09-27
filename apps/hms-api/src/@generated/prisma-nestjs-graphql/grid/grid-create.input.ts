import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Type } from 'class-transformer';
import { ClassificationCreateNestedManyWithoutGridInput } from '../classification/classification-create-nested-many-without-grid.input';

@InputType()
export class GridCreateInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => [GraphQLJSON], { nullable: true })
  steps?: Array<any>;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => ClassificationCreateNestedManyWithoutGridInput, { nullable: true })
  @Type(() => ClassificationCreateNestedManyWithoutGridInput)
  classifications?: ClassificationCreateNestedManyWithoutGridInput;
}
