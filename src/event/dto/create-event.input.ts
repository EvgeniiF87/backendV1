import { InputType, Field } from '@nestjs/graphql';
import { EventDirections } from '../directions';

@InputType()
export class CreateEventInput {
  @Field()
  title: string;

  @Field()
  desc: string;

  @Field({ defaultValue: true })
  publish?: boolean;

  @Field({ defaultValue: false })
  recommendation?: boolean;

  @Field(() => EventDirections)
  direction: EventDirections;
}
