import { Field, InputType } from '@nestjs/graphql';
import { GridAffiliation } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';
import { GridStepInput } from './grid-step.input';

@InputType()
export class CreateGridInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsEnum(GridAffiliation)
  affiliation: GridAffiliation;

  @IsNotEmpty()
  @IsString()
  name: string;

  @Type(() => GridStepInput)
  @IsArray()
  @ValidateNested({ each: true })
  steps: GridStepInput[];
}
