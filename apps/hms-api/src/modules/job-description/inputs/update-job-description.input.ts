import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class UpdateJobDescriptionInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => GraphQLUUID)
  @IsOptional()
  @IsUUID()
  classification_id?: string;

  @IsOptional()
  @IsString()
  e_class_id?: string;

  @IsOptional()
  @IsString()
  name?: string;
}
