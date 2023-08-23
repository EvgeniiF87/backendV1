import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEventPlaceCostOptionInput {
  @Field(() => Int)
  eventId?: number;

  @Field(() => Int)
  placeId?: number;

  @Field(() => Int)
  costOptionId: number;

  @Field({ defaultValue: 'бесплатно' })
  price: string;
}
