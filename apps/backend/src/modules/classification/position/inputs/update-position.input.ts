import { Field, InputType } from '@nestjs/graphql';
import { PositionCategory } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class UpdatePositionInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsOptional()
  @Field((type) => PositionCategory)
  @IsEnum(PositionCategory)
  category?: PositionCategory;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;
}
