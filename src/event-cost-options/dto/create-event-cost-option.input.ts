import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEventCostOptionInput {
  @Field(() => Int)
  eventId: number;

  @Field(() => Int)
  costOptionId: number;

  @Field({ nullable: true })
  price: string;
}
