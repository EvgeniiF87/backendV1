import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateEventInfoInput {
  @Field()
  location: string;

  @Field({ nullable: true })
  metro: string;

  @Field()
  work_time: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  site: string;

  @Field({ defaultValue: false })
  call_back: boolean;

  @Field(() => Int)
  eventId: number;
}
