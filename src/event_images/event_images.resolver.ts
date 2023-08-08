import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EventImagesService } from './event_images.service';
import { EventImageEntity } from './entities/event_image.entity';
import { CreateEventImageInput } from './dto/create-event_image.input';
import { UpdateEventImageInput } from './dto/update-event_image.input';

@Resolver(() => EventImageEntity)
export class EventImagesResolver {
  constructor(private readonly eventImagesService: EventImagesService) {}

  @Mutation(() => EventImageEntity)
  createEventImage(
    @Args('createEventImageInput') createEventImageInput: CreateEventImageInput,
  ) {
    console.log(createEventImageInput);

    return this.eventImagesService.create(createEventImageInput);
  }

  @Query(() => [EventImageEntity], { name: 'eventImages' })
  findAll() {
    return this.eventImagesService.findAll();
  }

  @Query(() => EventImageEntity, { name: 'eventImage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.eventImagesService.findOne(id);
  }

  @Mutation(() => EventImageEntity)
  updateEventImage(
    @Args('updateEventImageInput') updateEventImageInput: UpdateEventImageInput,
  ) {
    return this.eventImagesService.update(
      updateEventImageInput.id,
      updateEventImageInput,
    );
  }

  @Mutation(() => EventImageEntity)
  removeEventImage(@Args('id', { type: () => Int }) id: number) {
    return this.eventImagesService.remove(id);
  }
}
