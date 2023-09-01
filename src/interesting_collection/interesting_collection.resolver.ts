import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InterestingCollectionService } from './interesting_collection.service';
import { InterestingCollectionEntity } from './entities/interesting_collection.entity';
import { CreateInterestingCollectionInput } from './dto/create-interesting_collection.input';
import { UpdateInterestingCollectionInput } from './dto/update-interesting_collection.input';
import InterestingCollectionsAndCount from './respons';

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

  @Query(() => InterestingCollectionsAndCount, {
    name: 'interestingCollectionsCurrentDay',
  })
  findAllCurrentDay(
    @Args('catId', { type: () => Int, nullable: true }) catId?: number,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
    @Args('skip', { type: () => Int, nullable: true }) skip?: number,
  ) {
    const collections = this.interestingCollectionService.findAllCurrentDay(
      catId,
      take,
      skip,
    );

    const count =
      this.interestingCollectionService.findAllCurrentDayCount(catId);

    return { collections, count };
  }

  @Query(() => InterestingCollectionsAndCount, {
    name: 'interestingCollectionsWeekend',
  })
  findAllWeekend(
    @Args('catId', { type: () => Int, nullable: true }) catId?: number,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
    @Args('skip', { type: () => Int, nullable: true }) skip?: number,
  ) {
    const count = this.interestingCollectionService.findAllWeekendCount(catId);
    const collections = this.interestingCollectionService.findAllWeekend(
      catId,
      take,
      skip,
    );

    return { collections, count };
  }

  @Query(() => InterestingCollectionsAndCount, {
    name: 'interestingCollectionsWeek',
  })
  findAllWeek(
    @Args('catId', { type: () => Int, nullable: true }) catId?: number,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
    @Args('skip', { type: () => Int, nullable: true }) skip?: number,
  ) {
    const collections = this.interestingCollectionService.findAllWeek(
      catId,
      take,
      skip,
    );

    const count = this.interestingCollectionService.findAllWeekCount(catId);

    return { collections, count };
  }

  @Query(() => InterestingCollectionsAndCount, {
    name: 'interestingCollectionsMonth',
  })
  findAllMonth(
    @Args('catId', { type: () => Int, nullable: true }) catId?: number,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
    @Args('skip', { type: () => Int, nullable: true }) skip?: number,
  ) {
    const collections = this.interestingCollectionService.findAllMonth(
      catId,
      take,
      skip,
    );
    const count = this.interestingCollectionService.findAllMonthCount(catId);

    return { collections, count };
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
