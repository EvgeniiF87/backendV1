import { CreateEventInfoInput } from './create-event-info.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEventInfoInput extends PartialType(CreateEventInfoInput) {
  @Field(() => Int)
  id: number;
}
