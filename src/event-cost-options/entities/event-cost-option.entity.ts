import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { CostOptionEntity } from 'src/cost-options/entities/cost-option.entity';
import { EventEntity } from 'src/event/entities/event.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('event_cost_options')
export class EventCostOptionEtity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => EventEntity, (event) => event.eventCostOption)
  @Field(() => EventEntity)
  event: EventEntity;

  @ManyToOne(() => CostOptionEntity, (costOption) => costOption.eventCostOption)
  @Field(() => CostOptionEntity)
  costOption: CostOptionEntity;

  @Column()
  @Field(() => Int)
  eventId: number;

  @Column()
  @Field(() => Int)
  costOptionId: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  price: string;
}
