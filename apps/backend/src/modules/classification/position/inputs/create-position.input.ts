import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { PositionCategory } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

registerEnumType(PositionCategory, { name: 'PositionCategory' });

@InputType()
export class CreatePositionInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => PositionCategory)
  @IsEnum(PositionCategory)
  category: PositionCategory;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;
}
