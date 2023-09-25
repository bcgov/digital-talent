import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class IdentitySubIdentity_providerCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  sub!: string;

  @Field(() => String, { nullable: false })
  identity_provider!: string;
}
