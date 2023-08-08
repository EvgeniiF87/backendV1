import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { EventEntity } from 'src/event/entities/event.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('event_images')
export class EventImageEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToOne(() => EventEntity, (event) => event.images, {
    onDelete: 'CASCADE',
  })
  @Field(() => EventEntity)
  event: EventEntity;

  @Column()
  @Field(() => Int)
  eventId: number;
}
