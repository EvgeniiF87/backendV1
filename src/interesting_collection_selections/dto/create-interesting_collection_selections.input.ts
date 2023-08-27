import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInterestingCollectionSelectionInput {
  @Field(() => Int, { nullable: true })
  interestingId: number;

  @Field(() => Int, { nullable: true })
  eventId?: number;

  @Field(() => Int, { nullable: true })
  placeId?: number;
}
