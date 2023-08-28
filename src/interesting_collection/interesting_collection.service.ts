import { Injectable } from '@nestjs/common';
import { CreateInterestingCollectionInput } from './dto/create-interesting_collection.input';
import { UpdateInterestingCollectionInput } from './dto/update-interesting_collection.input';
import { InjectRepository } from '@nestjs/typeorm';
import { InterestingCollectionEntity } from './entities/interesting_collection.entity';
import { Raw, Repository } from 'typeorm';

@Injectable()
export class InterestingCollectionService {
  constructor(
    @InjectRepository(InterestingCollectionEntity)
    private readonly InterestingCollectionRepository: Repository<InterestingCollectionEntity>,
  ) {}

  async create(
    createInterestingCollectionInput: CreateInterestingCollectionInput,
  ) {
    return await this.InterestingCollectionRepository.save({
      ...createInterestingCollectionInput,
    });
  }

  async findAllAndWhereCategoryID(catId?: number) {
    return await this.InterestingCollectionRepository.find({
      where: {
        whenStartToShow: Raw((alias) => `${alias} > :date`, {
          date: new Date().toISOString().substring(0, 10),
        }),
        category: {
          categoryId: catId && catId,
        },
      },
      order: {
        priorities: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    return await this.InterestingCollectionRepository.findOne({
      where: { id },
      relations: {
        collection: {
          event: true,
          place: true,
        },
      },
    });
  }

  async update(
    id: number,
    updateInterestingCollectionInput: UpdateInterestingCollectionInput,
  ) {
    return await this.InterestingCollectionRepository.update(
      { id },
      { ...updateInterestingCollectionInput },
    );
  }

  async remove(id: number) {
    return await this.InterestingCollectionRepository.delete({ id });
  }
}
