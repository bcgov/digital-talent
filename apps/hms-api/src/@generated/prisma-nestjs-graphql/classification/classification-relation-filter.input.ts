import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClassificationWhereInput } from './classification-where.input';

@InputType()
export class ClassificationRelationFilter {
  @Field(() => ClassificationWhereInput, { nullable: true })
  @Type(() => ClassificationWhereInput)
  is?: ClassificationWhereInput;

  @Field(() => ClassificationWhereInput, { nullable: true })
  @Type(() => ClassificationWhereInput)
  isNot?: ClassificationWhereInput;
}
