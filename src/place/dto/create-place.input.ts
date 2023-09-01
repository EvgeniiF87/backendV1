import { InputType, Field } from '@nestjs/graphql';
import { PlaceDirections } from '../directions';

@InputType()
export class CreatePlaceInput {
  @Field()
  title: string;

  @Field()
  desc: string;

  @Field({ nullable: true })
  preview?: string;

  @Field({ defaultValue: true, nullable: true })
  publish?: boolean;

  @Field(() => Date, { nullable: true })
  existTimeStart?: Date;

  @Field(() => Date, { nullable: true })
  existTimeEnd?: Date;

  @Field(() => PlaceDirections)
  direction: PlaceDirections;
}
