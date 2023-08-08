import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EventInfoService } from './event-info.service';
import { EventInfoEntity } from './entities/event-info.entity';
import { CreateEventInfoInput } from './dto/create-event-info.input';
import { UpdateEventInfoInput } from './dto/update-event-info.input';

@Resolver(() => EventInfoEntity)
export class EventInfoResolver {
  constructor(private readonly eventInfoService: EventInfoService) {}

  @Mutation(() => EventInfoEntity)
  createEventInfo(
    @Args('createEventInfoInput') createEventInfoInput: CreateEventInfoInput,
  ) {
    return this.eventInfoService.create(createEventInfoInput);
  }

  @Query(() => EventInfoEntity, { name: 'eventInfo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.eventInfoService.findOne(id);
  }

  @Mutation(() => EventInfoEntity)
  updateEventInfo(
    @Args('updateEventInfoInput') updateEventInfoInput: UpdateEventInfoInput,
  ) {
    return this.eventInfoService.update(
      updateEventInfoInput.id,
      updateEventInfoInput,
    );
  }
}
