import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { EventEntity } from 'src/event/entities/event.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('event_info')
export class EventInfoEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  location: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  metro: string;

  @Field()
  @Column()
  work_time: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  site: string;

  @Field()
  @Column({ default: false, nullable: true })
  call_back: boolean;

  @OneToOne(() => EventEntity, (event) => event.info, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Field(() => EventEntity)
  @JoinColumn()
  event: EventEntity;

  @Column()
  @Field(() => Int)
  eventId: number;
}
