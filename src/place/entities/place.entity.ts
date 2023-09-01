import { ObjectType, Field } from '@nestjs/graphql';
import { EventPlaceCostOptionEntity } from 'src/event_place_cost_options/entities/event_place_cost_option.entity';
import { EventPlaceTagEntity } from 'src/event_place_tags/entities/event_place_tag.entity';
import { ImageEntity } from 'src/images/entities/image.entity';
import { InfoEntity } from 'src/info/entities/info.entity';
import { InterestingCollectionSelectionEntity } from 'src/interesting_collection_selections/entities/interesting_collection_selections.entity';
import { PlaceDirections } from '../directions';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { DefaultFieldsEntity } from 'src/default-fields-entity';

@ObjectType()
@Entity('places')
export class PlaceEntity extends DefaultFieldsEntity {
  @Field({ defaultValue: 'places' })
  @Column({ default: 'places' })
  categry: string;

  @Field(() => PlaceDirections)
  @Column({ type: 'enum', enum: PlaceDirections })
  direction: PlaceDirections;

  @Field(() => [ImageEntity])
  @OneToMany(() => ImageEntity, (image) => image.place, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  images: ImageEntity[];

  @Field(() => [InfoEntity])
  @OneToOne(() => InfoEntity, (info) => info.place, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  info: InfoEntity[];

  @OneToMany(() => EventPlaceTagEntity, (tag) => tag.place)
  @Field(() => [EventPlaceTagEntity])
  tags: EventPlaceTagEntity[];

  @Field(() => [EventPlaceCostOptionEntity])
  @OneToMany(() => EventPlaceCostOptionEntity, (costOption) => costOption.place)
  costOption: EventPlaceCostOptionEntity[];

  @Field(() => [InterestingCollectionSelectionEntity])
  @OneToMany(
    () => InterestingCollectionSelectionEntity,
    (interesting) => interesting.place,
  )
  interesting: InterestingCollectionSelectionEntity;
}
