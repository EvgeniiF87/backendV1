import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { CostOptionsService } from './cost-options.service';
import { CostOptionEntity } from './entities/cost-option.entity';
import { CreateCostOptionInput } from './dto/create-cost-option.input';

@Resolver(() => CostOptionEntity)
export class CostOptionsResolver {
  constructor(private readonly costOptionsService: CostOptionsService) {}

  @Mutation(() => CostOptionEntity)
  createCostOption(
    @Args('createCostOptionInput') createCostOptionInput: CreateCostOptionInput,
  ) {
    return this.costOptionsService.create(createCostOptionInput);
  }

  @Mutation(() => CostOptionEntity)
  removeCostOption(@Args('id', { type: () => Int }) id: number) {
    return this.costOptionsService.remove(id);
  }
}
