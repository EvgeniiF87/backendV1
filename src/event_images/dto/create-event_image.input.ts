import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateEventImageInput {
  @Field()
  name: string;

  @Field(() => Int)
  eventId: number;
}
