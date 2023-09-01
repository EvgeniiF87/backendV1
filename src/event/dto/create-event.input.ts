import { InputType, Field } from '@nestjs/graphql';
import { EventDirections } from '../directions';

@InputType()
export class CreateEventInput {
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

  @Field({ defaultValue: false, nullable: true })
  recommendation?: boolean;

  @Field(() => EventDirections)
  direction: EventDirections;
}
