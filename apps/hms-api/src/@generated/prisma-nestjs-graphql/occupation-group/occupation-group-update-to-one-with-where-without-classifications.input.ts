import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OccupationGroupWhereInput } from './occupation-group-where.input';
import { OccupationGroupUpdateWithoutClassificationsInput } from './occupation-group-update-without-classifications.input';

@InputType()
export class OccupationGroupUpdateToOneWithWhereWithoutClassificationsInput {
  @Field(() => OccupationGroupWhereInput, { nullable: true })
  @Type(() => OccupationGroupWhereInput)
  where?: OccupationGroupWhereInput;

  @Field(() => OccupationGroupUpdateWithoutClassificationsInput, { nullable: false })
  @Type(() => OccupationGroupUpdateWithoutClassificationsInput)
  data!: OccupationGroupUpdateWithoutClassificationsInput;
}
