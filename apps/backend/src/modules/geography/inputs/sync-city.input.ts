import { Field, InputType } from '@nestjs/graphql';
import { IsLatitude, IsLongitude, IsNotEmpty, IsPostalCode, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class SyncCityInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsUUID()
  region_id: string;

  @IsNotEmpty()
  @IsString()
  deltek_id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsPostalCode('CA')
  postal_code: string;

  @IsNotEmpty()
  @IsLatitude()
  lat: number;

  @IsNotEmpty()
  @IsLongitude()
  lon: number;
}
