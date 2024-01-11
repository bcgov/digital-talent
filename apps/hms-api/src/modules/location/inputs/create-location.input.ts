import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';
import { LocationRegion } from '../../../@generated/prisma-nestjs-graphql';

@InputType()
export class CreateLocationInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  deltek_id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  postal_code: string;

  @IsNumber()
  @IsNotEmpty()
  lat: number;

  @IsNumber()
  @IsNotEmpty()
  lon: number;

  @Field((type) => LocationRegion)
  @IsEnum(LocationRegion)
  region: LocationRegion;
}
