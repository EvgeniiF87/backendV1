import { Injectable } from '@nestjs/common';
import { CreateInterestingCategorySelectInput } from './dto/create-interesting_category_select.input';
import { UpdateInterestingCategorySelectInput } from './dto/update-interesting_category_select.input';

@Injectable()
export class InterestingCategorySelectService {
  create(createInterestingCategorySelectInput: CreateInterestingCategorySelectInput) {
    return 'This action adds a new interestingCategorySelect';
  }

  findAll() {
    return `This action returns all interestingCategorySelect`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interestingCategorySelect`;
  }

  update(id: number, updateInterestingCategorySelectInput: UpdateInterestingCategorySelectInput) {
    return `This action updates a #${id} interestingCategorySelect`;
  }

  remove(id: number) {
    return `This action removes a #${id} interestingCategorySelect`;
  }
}
