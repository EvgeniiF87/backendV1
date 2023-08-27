import { Injectable } from '@nestjs/common';
import { CreateInterestingCollectionInput } from './dto/create-interesting_collection.input';
import { UpdateInterestingCollectionInput } from './dto/update-interesting_collection.input';
import { InjectRepository } from '@nestjs/typeorm';
import { InterestingCollectionEntity } from './entities/interesting_collection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InterestingCollectionService {
  constructor(
    @InjectRepository(InterestingCollectionEntity)
    private readonly InterestingCollectionRepository: Repository<InterestingCollectionEntity>,
  ) {}

  async create(
    createInterestingCollectionInput: CreateInterestingCollectionInput,
  ) {
    return await this.InterestingCollectionRepository.create({
      ...createInterestingCollectionInput,
    });
  }

  async findAll() {
    return await this.InterestingCollectionRepository.find({
      relations: {
        collection: {
          event: true,
          place: true,
        },
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
