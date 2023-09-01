import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateInfoInput {
  @Field({ nullable: true })
  adress?: string;

  @Field({ nullable: true })
  metro?: string;

  @Field({ nullable: true })
  time_from?: string;

  @Field({ nullable: true })
  time_to?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ defaultValue: false, nullable: true })
  call_back?: boolean;

  @Field({ nullable: true })
  site?: string;

  @Field({ nullable: true })
  social?: string;

  @Field({ nullable: true })
  longitude?: string;

  @Field({ nullable: true })
  latitude?: string;

  @Field(() => Int, { nullable: true })
  placeId?: number;

  @Field(() => Int, { nullable: true })
  eventId?: number;
}
