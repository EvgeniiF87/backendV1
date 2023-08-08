import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEventTagInput {
  @Field(() => Int)
  eventId: number;

  @Field(() => Int)
  tagId: number;
}
