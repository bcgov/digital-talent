import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OccupationGroupCreateWithoutClassificationsInput } from './occupation-group-create-without-classifications.input';
import { OccupationGroupCreateOrConnectWithoutClassificationsInput } from './occupation-group-create-or-connect-without-classifications.input';
import { OccupationGroupUpsertWithoutClassificationsInput } from './occupation-group-upsert-without-classifications.input';
import { OccupationGroupWhereUniqueInput } from './occupation-group-where-unique.input';
import { OccupationGroupUpdateToOneWithWhereWithoutClassificationsInput } from './occupation-group-update-to-one-with-where-without-classifications.input';

@InputType()
export class OccupationGroupUpdateOneRequiredWithoutClassificationsNestedInput {
  @Field(() => OccupationGroupCreateWithoutClassificationsInput, { nullable: true })
  @Type(() => OccupationGroupCreateWithoutClassificationsInput)
  create?: OccupationGroupCreateWithoutClassificationsInput;

  @Field(() => OccupationGroupCreateOrConnectWithoutClassificationsInput, { nullable: true })
  @Type(() => OccupationGroupCreateOrConnectWithoutClassificationsInput)
  connectOrCreate?: OccupationGroupCreateOrConnectWithoutClassificationsInput;

  @Field(() => OccupationGroupUpsertWithoutClassificationsInput, { nullable: true })
  @Type(() => OccupationGroupUpsertWithoutClassificationsInput)
  upsert?: OccupationGroupUpsertWithoutClassificationsInput;

  @Field(() => OccupationGroupWhereUniqueInput, { nullable: true })
  @Type(() => OccupationGroupWhereUniqueInput)
  connect?: Prisma.AtLeast<OccupationGroupWhereUniqueInput, 'id' | 'code' | 'code'>;

  @Field(() => OccupationGroupUpdateToOneWithWhereWithoutClassificationsInput, { nullable: true })
  @Type(() => OccupationGroupUpdateToOneWithWhereWithoutClassificationsInput)
  update?: OccupationGroupUpdateToOneWithWhereWithoutClassificationsInput;
}
