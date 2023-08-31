import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsUUID, Max, Min } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class UpdateClassificationInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => GraphQLUUID)
  @IsOptional()
  @IsUUID()
  grid_id?: string;

  @Field((type) => GraphQLUUID)
  @IsOptional()
  @IsUUID()
  occupation_group_id?: string;

  @IsOptional()
  @Min(0)
  @Max(1)
  @IsNumber({ maxDecimalPlaces: 4 })
  rate_adjustment?: number;
}
