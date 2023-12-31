import { ObjectType, Field } from '@nestjs/graphql';
import { EventPlaceCostOptionEntity } from 'src/event_place_cost_options/entities/event_place_cost_option.entity';
import { EventPlaceTagEntity } from 'src/event_place_tags/entities/event_place_tag.entity';
import { ImageEntity } from 'src/images/entities/image.entity';
import { InfoEntity } from 'src/info/entities/info.entity';
import { InterestingCollectionSelectionEntity } from 'src/interesting_collection_selections/entities/interesting_collection_selections.entity';
import { EventDirections } from '../directions';

import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { DefaultFieldsEntity } from 'src/default-fields-entity';

@ObjectType()
@Entity('events')
export class EventEntity extends DefaultFieldsEntity {
  @Field({ defaultValue: false })
  @Column({ type: 'boolean', default: false })
  recommendation: boolean;

  @Field({ defaultValue: 'events' })
  @Column({ default: 'events' })
  categry: string;

  @Field(() => EventDirections)
  @Column({ type: 'enum', enum: EventDirections })
  direction: EventDirections;

  @Field(() => [ImageEntity])
  @OneToMany(() => ImageEntity, (image) => image.event, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  images: ImageEntity[];

  @Field(() => InfoEntity)
  @OneToOne(() => InfoEntity, (info) => info.event, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  info: InfoEntity[];

  @Field(() => [EventPlaceTagEntity])
  @OneToMany(() => EventPlaceTagEntity, (eventTag) => eventTag.event)
  tags: EventPlaceTagEntity[];

  @Field(() => [EventPlaceCostOptionEntity])
  @OneToMany(() => EventPlaceCostOptionEntity, (costOption) => costOption.event)
  costOption: EventPlaceCostOptionEntity[];

  @Field(() => [InterestingCollectionSelectionEntity])
  @OneToMany(
    () => InterestingCollectionSelectionEntity,
    (interesting) => interesting.event,
  )
  interesting: InterestingCollectionSelectionEntity[];
}
