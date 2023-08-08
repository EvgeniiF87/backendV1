import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEventInput {
  @Field()
  title: string;

  @Field()
  desc: string;

  @Field()
  preview: string;

  @Field({ defaultValue: true })
  publish: boolean;
}
