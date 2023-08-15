import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsUUID, Max, Min } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class UpdateClassificationInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsOptional()
  @Field((type) => GraphQLUUID)
  @IsUUID()
  grid_id?: string;

  @IsOptional()
  @Field((type) => GraphQLUUID)
  @IsUUID()
  position_id?: string;

  @IsOptional()
  @Min(0)
  @Max(1)
  @IsNumber({ maxDecimalPlaces: 3 })
  rate_adjustment?: number;
}
