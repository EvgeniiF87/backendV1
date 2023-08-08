import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { EventTagService } from './event-tag.service';
import { EventTagEntity } from './entities/event-tag.entity';
import { CreateEventTagInput } from './dto/create-event-tag.input';

@Resolver(() => EventTagEntity)
export class EventTagResolver {
  constructor(private readonly eventTagService: EventTagService) {}

  @Mutation(() => EventTagEntity)
  createEventTag(
    @Args('createEventTagInput') createEventTagInput: CreateEventTagInput,
  ) {
    return this.eventTagService.create(createEventTagInput);
  }

  @Mutation(() => EventTagEntity)
  removeEventTag(@Args('id', { type: () => Int }) id: number) {
    return this.eventTagService.remove(id);
  }
}
