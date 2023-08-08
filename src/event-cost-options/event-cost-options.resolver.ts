import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { EventCostOptionsService } from './event-cost-options.service';
import { EventCostOptionEtity } from './entities/event-cost-option.entity';
import { CreateEventCostOptionInput } from './dto/create-event-cost-option.input';

@Resolver(() => EventCostOptionEtity)
export class EventCostOptionsResolver {
  constructor(
    private readonly eventCostOptionsService: EventCostOptionsService,
  ) {}

  @Mutation(() => EventCostOptionEtity)
  createEventCostOption(
    @Args('createEventCostOptionInput')
    createEventCostOptionInput: CreateEventCostOptionInput,
  ) {
    return this.eventCostOptionsService.create(createEventCostOptionInput);
  }

  @Mutation(() => EventCostOptionEtity)
  removeEventCostOption(@Args('id', { type: () => Int }) id: number) {
    return this.eventCostOptionsService.remove(id);
  }
}
