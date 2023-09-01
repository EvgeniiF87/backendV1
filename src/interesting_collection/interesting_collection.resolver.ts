import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InterestingCollectionService } from './interesting_collection.service';
import { InterestingCollectionEntity } from './entities/interesting_collection.entity';
import { CreateInterestingCollectionInput } from './dto/create-interesting_collection.input';
import { UpdateInterestingCollectionInput } from './dto/update-interesting_collection.input';

@Resolver(() => InterestingCollectionEntity)
export class InterestingCollectionResolver {
  constructor(
    private readonly interestingCollectionService: InterestingCollectionService,
  ) {}

  @Mutation(() => InterestingCollectionEntity)
  createInterestingCollection(
    @Args('createInterestingCollectionInput')
    createInterestingCollectionInput: CreateInterestingCollectionInput,
  ) {
    return this.interestingCollectionService.create(
      createInterestingCollectionInput,
    );
  }

  @Query(() => [InterestingCollectionEntity], {
    name: 'interestingCollectionsCurrentDay',
  })
  findAllCurrentDay(
    @Args('catId', { type: () => Int, nullable: true }) catId?: number,
  ) {
    return this.interestingCollectionService.findAllCurrentDay(catId);
  }

  @Query(() => [InterestingCollectionEntity], {
    name: 'interestingCollectionsWeekend',
  })
  findAllWeekend(
    @Args('catId', { type: () => Int, nullable: true }) catId?: number,
  ) {
    return this.interestingCollectionService.findAllWeekend(catId);
  }

  @Query(() => [InterestingCollectionEntity], {
    name: 'interestingCollectionsWeek',
  })
  findAllWeek(
    @Args('catId', { type: () => Int, nullable: true }) catId?: number,
  ) {
    return this.interestingCollectionService.findAllWeek(catId);
  }

  @Query(() => [InterestingCollectionEntity], {
    name: 'interestingCollectionsMonth',
  })
  findAllMonth(
    @Args('catId', { type: () => Int, nullable: true }) catId?: number,
  ) {
    return this.interestingCollectionService.findAllMonth(catId);
  }

  @Query(() => InterestingCollectionEntity, { name: 'interestingCollection' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.interestingCollectionService.findOne(id);
  }

  @Mutation(() => InterestingCollectionEntity)
  updateInterestingCollection(
    @Args('updateInterestingCollectionInput')
    updateInterestingCollectionInput: UpdateInterestingCollectionInput,
  ) {
    return this.interestingCollectionService.update(
      updateInterestingCollectionInput.id,
      updateInterestingCollectionInput,
    );
  }

  @Mutation(() => InterestingCollectionEntity)
  removeInterestingCollection(@Args('id', { type: () => Int }) id: number) {
    return this.interestingCollectionService.remove(id);
  }
}
