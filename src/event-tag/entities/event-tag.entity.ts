import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { EventEntity } from 'src/event/entities/event.entity';
import { TagEntity } from 'src/tag/entities/tag.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('events_tags')
export class EventTagEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => EventEntity, (event) => event.eventTag)
  @Field(() => EventEntity)
  event: EventEntity;

  @ManyToOne(() => TagEntity, (tag) => tag.eventTag)
  @Field(() => TagEntity)
  tag: TagEntity;

  @Field(() => Int)
  @Column()
  eventId: number;

  @Field(() => Int)
  @Column()
  tagId: number;
}
