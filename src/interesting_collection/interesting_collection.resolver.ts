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

  @Query(() => [InterestingCollectionEntity], { name: 'interestingCollection' })
  findAll() {
    return this.interestingCollectionService.findAll();
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