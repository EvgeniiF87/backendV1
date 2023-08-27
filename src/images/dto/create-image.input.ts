import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateImageInput {
  @Field()
  path?: string;

  @Field(() => Int, { nullable: true })
  placeId?: number;

  @Field(() => Int, { nullable: true })
  eventId?: number;
}
