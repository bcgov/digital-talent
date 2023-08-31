import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';
import { GridStepInput } from './grid-step.input';

@InputType()
export class CreateGridInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @Type(() => GridStepInput)
  @IsArray()
  @ValidateNested({ each: true })
  steps: GridStepInput[];
}
