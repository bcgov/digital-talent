import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class CreateGridInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
