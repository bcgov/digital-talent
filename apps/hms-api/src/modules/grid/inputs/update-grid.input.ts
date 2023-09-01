import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';
import { GridStepInput } from './grid-step.input';

@InputType()
export class UpdateGridInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @Type(() => GridStepInput)
  @IsArray()
  @ValidateNested({ each: true })
  steps?: GridStepInput[];
}
