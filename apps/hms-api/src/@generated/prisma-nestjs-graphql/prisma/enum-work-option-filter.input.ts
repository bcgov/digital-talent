import { Field, InputType } from '@nestjs/graphql';
import { WorkOption } from './work-option.enum';

@InputType()
export class EnumWorkOptionFilter {
  @Field(() => WorkOption, { nullable: true })
  equals?: keyof typeof WorkOption;

  @Field(() => [WorkOption], { nullable: true })
  in?: Array<keyof typeof WorkOption>;

  @Field(() => [WorkOption], { nullable: true })
  notIn?: Array<keyof typeof WorkOption>;

  @Field(() => EnumWorkOptionFilter, { nullable: true })
  not?: EnumWorkOptionFilter;
}
