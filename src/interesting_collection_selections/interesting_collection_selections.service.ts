import { Injectable } from '@nestjs/common';
import { CreateInterestingCollectionSelectionInput } from './dto/create-interesting_collection_selections.input';
import { UpdateInterestingCollectionSelectionInput } from './dto/update-interesting_collection_selections.input';

@Injectable()
export class InterestingCollectionSelectionsService {
  create(
    createInterestingCollectionSelectionInput: CreateInterestingCollectionSelectionInput,
  ) {
    return 'This action adds a new interestingCollectionSelection';
  }

  findAll() {
    return `This action returns all interestingCollectionSelections`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interestingCollectionSelection`;
  }

  update(
    id: number,
    updateInterestingCollectionSelectionInput: UpdateInterestingCollectionSelectionInput,
  ) {
    return `This action updates a #${id} interestingCollectionSelection`;
  }

  remove(id: number) {
    return `This action removes a #${id} interestingCollectionSelection`;
  }
}
