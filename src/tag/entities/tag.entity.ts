import { ObjectType, Field, ID } from '@nestjs/graphql';
import { EventTagEntity } from 'src/event-tag/entities/event-tag.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('tags')
export class TagEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  name: string;

  @OneToMany(() => EventTagEntity, (eventTag) => eventTag.tag)
  @Field(() => [EventTagEntity])
  eventTag: EventTagEntity[];
}
