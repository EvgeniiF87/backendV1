import { Injectable } from '@nestjs/common';
import { CreateInterestingCategoryInput } from './dto/create-interesting_category.input';
import { UpdateInterestingCategoryInput } from './dto/update-interesting_category.input';

@Injectable()
export class InterestingCategoriesService {
  create(createInterestingCategoryInput: CreateInterestingCategoryInput) {
    return 'This action adds a new interestingCategory';
  }

  findAll() {
    return `This action returns all interestingCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interestingCategory`;
  }

  update(id: number, updateInterestingCategoryInput: UpdateInterestingCategoryInput) {
    return `This action updates a #${id} interestingCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} interestingCategory`;
  }
}
