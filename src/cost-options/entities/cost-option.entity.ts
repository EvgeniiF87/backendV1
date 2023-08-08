import { ObjectType, Field, ID } from '@nestjs/graphql';
import { EventCostOptionEtity } from 'src/event-cost-options/entities/event-cost-option.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('cost_options')
export class CostOptionEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Field()
  name: string;

  @OneToMany(
    () => EventCostOptionEtity,
    (eventCostOption) => eventCostOption.costOption,
  )
  @Field(() => [EventCostOptionEtity])
  eventCostOption: EventCostOptionEtity[];
}
