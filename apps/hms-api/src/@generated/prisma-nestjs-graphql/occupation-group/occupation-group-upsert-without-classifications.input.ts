import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OccupationGroupUpdateWithoutClassificationsInput } from './occupation-group-update-without-classifications.input';
import { OccupationGroupCreateWithoutClassificationsInput } from './occupation-group-create-without-classifications.input';
import { OccupationGroupWhereInput } from './occupation-group-where.input';

@InputType()
export class OccupationGroupUpsertWithoutClassificationsInput {
  @Field(() => OccupationGroupUpdateWithoutClassificationsInput, { nullable: false })
  @Type(() => OccupationGroupUpdateWithoutClassificationsInput)
  update!: OccupationGroupUpdateWithoutClassificationsInput;

  @Field(() => OccupationGroupCreateWithoutClassificationsInput, { nullable: false })
  @Type(() => OccupationGroupCreateWithoutClassificationsInput)
  create!: OccupationGroupCreateWithoutClassificationsInput;

  @Field(() => OccupationGroupWhereInput, { nullable: true })
  @Type(() => OccupationGroupWhereInput)
  where?: OccupationGroupWhereInput;
}
