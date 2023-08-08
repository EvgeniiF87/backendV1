import { CreateEventImageInput } from './create-event_image.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEventImageInput extends PartialType(CreateEventImageInput) {
  @Field(() => ID)
  id: number;
}
