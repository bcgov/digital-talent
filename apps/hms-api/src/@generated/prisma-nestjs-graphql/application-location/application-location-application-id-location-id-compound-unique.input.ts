import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ApplicationLocationApplication_idLocation_idCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  application_id!: string;

  @Field(() => String, { nullable: false })
  location_id!: string;
}
