import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClassificationCreateManyGridInput } from './classification-create-many-grid.input';

@InputType()
export class ClassificationCreateManyGridInputEnvelope {
  @Field(() => [ClassificationCreateManyGridInput], { nullable: false })
  @Type(() => ClassificationCreateManyGridInput)
  data!: Array<ClassificationCreateManyGridInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
