import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { GridWhereInput } from './grid-where.input';
import { GridUpdateWithoutClassificationsInput } from './grid-update-without-classifications.input';

@InputType()
export class GridUpdateToOneWithWhereWithoutClassificationsInput {
  @Field(() => GridWhereInput, { nullable: true })
  @Type(() => GridWhereInput)
  where?: GridWhereInput;

  @Field(() => GridUpdateWithoutClassificationsInput, { nullable: false })
  @Type(() => GridUpdateWithoutClassificationsInput)
  data!: GridUpdateWithoutClassificationsInput;
}
