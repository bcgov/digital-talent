import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ClassificationCreateWithoutGridInput } from './classification-create-without-grid.input';
import { ClassificationCreateOrConnectWithoutGridInput } from './classification-create-or-connect-without-grid.input';
import { ClassificationCreateManyGridInputEnvelope } from './classification-create-many-grid-input-envelope.input';
import { ClassificationWhereUniqueInput } from './classification-where-unique.input';

@InputType()
export class ClassificationUncheckedCreateNestedManyWithoutGridInput {
  @Field(() => [ClassificationCreateWithoutGridInput], { nullable: true })
  @Type(() => ClassificationCreateWithoutGridInput)
  create?: Array<ClassificationCreateWithoutGridInput>;

  @Field(() => [ClassificationCreateOrConnectWithoutGridInput], { nullable: true })
  @Type(() => ClassificationCreateOrConnectWithoutGridInput)
  connectOrCreate?: Array<ClassificationCreateOrConnectWithoutGridInput>;

  @Field(() => ClassificationCreateManyGridInputEnvelope, { nullable: true })
  @Type(() => ClassificationCreateManyGridInputEnvelope)
  createMany?: ClassificationCreateManyGridInputEnvelope;

  @Field(() => [ClassificationWhereUniqueInput], { nullable: true })
  @Type(() => ClassificationWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ClassificationWhereUniqueInput, 'id'>>;
}
