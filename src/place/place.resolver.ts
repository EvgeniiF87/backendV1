import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlaceService } from './place.service';
import { PlaceEntity } from './entities/place.entity';
import { CreatePlaceInput } from './dto/create-place.input';
import { UpdatePlaceInput } from './dto/update-place.input';

@Resolver(() => PlaceEntity)
export class PlaceResolver {
  constructor(private readonly placeService: PlaceService) {}

  @Mutation(() => PlaceEntity)
  createPlace(@Args('createPlaceInput') createPlaceInput: CreatePlaceInput) {
    return this.placeService.create(createPlaceInput);
  }

  @Query(() => [PlaceEntity], { name: 'places' })
  findAll() {
    return this.placeService.findAll();
  }

  @Query(() => PlaceEntity, { name: 'place' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.placeService.findOne(id);
  }

  @Mutation(() => PlaceEntity)
  updatePlace(@Args('updatePlaceInput') updatePlaceInput: UpdatePlaceInput) {
    return this.placeService.update(updatePlaceInput.id, updatePlaceInput);
  }

  @Mutation(() => PlaceEntity)
  removePlace(@Args('id', { type: () => Int }) id: number) {
    return this.placeService.remove(id);
  }
}
