import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class CreateMinistryInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  deltek_id: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
