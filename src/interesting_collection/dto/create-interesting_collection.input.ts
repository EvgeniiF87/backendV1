import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateInterestingCollectionInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  img?: string;

  @Field({ defaultValue: 0, nullable: true })
  views?: number;

  @Field(() => Date, { nullable: true })
  existTimeStart?: Date;

  @Field(() => Date, { nullable: true })
  existTimeEnd?: Date;

  @Field(() => Date, { nullable: true })
  whenStartToShow?: Date;

  @Field({ defaultValue: 0, nullable: true })
  priorities?: number;
}
