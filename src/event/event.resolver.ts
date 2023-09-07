import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EventService } from './event.service';
import { EventEntity } from './entities/event.entity';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';

@Resolver(() => EventEntity)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Mutation(() => EventEntity)
  createEvent(@Args('createEventInput') createEventInput: CreateEventInput) {
    return this.eventService.create(createEventInput);
  }

  @Query(() => [EventEntity], { name: 'events' })
  findAll() {
    return this.eventService.findAll();
  }

  @Query(() => EventEntity, { name: 'event' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.eventService.findOne(id);
  }

  @Mutation(() => EventEntity)
  updateEvent(@Args('updateEventInput') updateEventInput: UpdateEventInput) {
    return this.eventService.update(updateEventInput.id, updateEventInput);
  }

  @Mutation(() => EventEntity)
  updateEventViews(@Args('id', { type: () => Int }) id: number) {
    return this.eventService.updateViews(id);
  }

  @Mutation(() => EventEntity)
  removeEvent(@Args('id', { type: () => Int }) id: number) {
    return this.eventService.remove(id);
  }
}
