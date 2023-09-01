import { Field, InputType } from '@nestjs/graphql';
import { LocationRegion } from '@prisma/client';
import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class UpdateLocationInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsOptional()
  deltek_id: string;

  @IsOptional()
  name: string;

  @IsOptional()
  postal_code: string;

  @IsOptional()
  lat: number;

  @IsOptional()
  lon: number;

  @Field((type) => LocationRegion)
  @IsOptional()
  @IsEnum(LocationRegion)
  region?: LocationRegion;
}
