import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { EventCostOptionEtity } from 'src/event-cost-options/entities/event-cost-option.entity';
import { EventInfoEntity } from 'src/event-info/entities/event-info.entity';
import { EventTagEntity } from 'src/event-tag/entities/event-tag.entity';
import { EventImageEntity } from 'src/event_images/entities/event_image.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('events')
export class EventEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  title: string;

  @Field()
  @Column()
  desc: string;

  @Field(() => Int, { nullable: true })
  @Column({ default: 0, nullable: true })
  views: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  preview?: string;

  @Field({ nullable: true })
  @Column({ default: true, nullable: true })
  publish: boolean;

  @OneToMany(() => EventImageEntity, (image) => image.event, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Field(() => [EventImageEntity])
  images: EventImageEntity[];

  @OneToOne(() => EventInfoEntity, (info) => info.event, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Field(() => EventInfoEntity)
  info: EventInfoEntity;

  @OneToMany(() => EventTagEntity, (eventTag) => eventTag.event)
  @Field(() => [EventTagEntity])
  eventTag: EventTagEntity[];

  @OneToMany(
    () => EventCostOptionEtity,
    (eventCostOption) => eventCostOption.event,
  )
  @Field(() => [EventCostOptionEtity])
  eventCostOption: EventCostOptionEtity[];
}
