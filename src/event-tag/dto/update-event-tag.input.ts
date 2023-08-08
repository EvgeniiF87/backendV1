import { CreateEventTagInput } from './create-event-tag.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEventTagInput extends PartialType(CreateEventTagInput) {
  @Field(() => Int)
  id: number;
}
