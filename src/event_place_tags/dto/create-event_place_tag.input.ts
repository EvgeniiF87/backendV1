import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEventPlaceTagInput {
  @Field(() => Int, { nullable: true })
  eventId?: number;

  @Field(() => Int, { nullable: true })
  placeId?: number;

  @Field(() => Int)
  tagsId: number;
}
