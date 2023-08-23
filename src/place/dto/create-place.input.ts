import { InputType, Field } from '@nestjs/graphql';
import { PlaceDirections } from '../directions';

@InputType()
export class CreatePlaceInput {
  @Field()
  title: string;

  @Field()
  desc: string;

  @Field()
  preview: string;

  @Field({ defaultValue: true })
  publish?: boolean;

  @Field(() => PlaceDirections)
  direction: PlaceDirections;
}
