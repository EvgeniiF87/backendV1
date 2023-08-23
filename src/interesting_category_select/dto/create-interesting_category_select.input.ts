import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInterestingCategorySelectInput {
  @Field(() => Int)
  interestingId: number;

  @Field(() => Int)
  categoryId: number;
}
