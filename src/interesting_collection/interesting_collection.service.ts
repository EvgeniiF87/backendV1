import { Injectable } from '@nestjs/common';
import { CreateInterestingCollectionInput } from './dto/create-interesting_collection.input';
import { UpdateInterestingCollectionInput } from './dto/update-interesting_collection.input';

@Injectable()
export class InterestingCollectionService {
  create(createInterestingCollectionInput: CreateInterestingCollectionInput) {
    return 'This action adds a new interestingCollection';
  }

  findAll() {
    return `This action returns all interestingCollection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interestingCollection`;
  }

  update(id: number, updateInterestingCollectionInput: UpdateInterestingCollectionInput) {
    return `This action updates a #${id} interestingCollection`;
  }

  remove(id: number) {
    return `This action removes a #${id} interestingCollection`;
  }
}
