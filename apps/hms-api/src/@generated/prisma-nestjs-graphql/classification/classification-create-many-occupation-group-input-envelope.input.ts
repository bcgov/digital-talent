import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClassificationCreateManyOccupation_groupInput } from './classification-create-many-occupation-group.input';

@InputType()
export class ClassificationCreateManyOccupation_groupInputEnvelope {
  @Field(() => [ClassificationCreateManyOccupation_groupInput], { nullable: false })
  @Type(() => ClassificationCreateManyOccupation_groupInput)
  data!: Array<ClassificationCreateManyOccupation_groupInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
