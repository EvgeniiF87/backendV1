import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateInterestingCategoryInput {
  @Field()
  name: string;
}
