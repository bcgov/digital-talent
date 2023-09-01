import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { GraphQLString } from 'graphql';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class CreateCommentInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  record_id: string;

  @Field((type) => GraphQLString)
  @IsString()
  @IsNotEmpty()
  record_type: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  user_id: string;

  @Field((type) => GraphQLString)
  @IsString()
  @IsNotEmpty()
  text: string;
}
