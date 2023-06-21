import { Field, InputType } from '@nestjs/graphql';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';
import { GraphQLRange } from '../../graphql/scalars/graphql-range.scalar';

@InputType()
export class SyncClassificationInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  grid: string;

  @Field((type) => GraphQLRange)
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  salary_range: [number, number];

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  salary_adjustment?: number;
}
