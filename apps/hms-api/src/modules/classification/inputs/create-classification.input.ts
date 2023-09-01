import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsUUID, Max, Min } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class CreateClassificationInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  grid_id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  occupation_group_id: string;

  @Min(0)
  @Max(1)
  @IsNumber({ maxDecimalPlaces: 4 })
  rate_adjustment: number;
}
