import { Injectable } from '@nestjs/common';
import { CreateInterestingCollectionSelectionInput } from './dto/create-interesting_collection_selections.input';
import { UpdateInterestingCollectionSelectionInput } from './dto/update-interesting_collection_selections.input';
import { InjectRepository } from '@nestjs/typeorm';
import { InterestingCollectionSelectionEntity } from './entities/interesting_collection_selections.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InterestingCollectionSelectionsService {
  constructor(
    @InjectRepository(InterestingCollectionSelectionEntity)
    private readonly InterestingCollectionSelectionRepository: Repository<InterestingCollectionSelectionEntity>,
  ) {}

  create(
    createInterestingCollectionSelectionInput: CreateInterestingCollectionSelectionInput,
  ) {
    return 'This action adds a new interestingCollectionSelection';
  }

  async findAll() {
    return await this.InterestingCollectionSelectionRepository.find({
      relations: {
        interesting: true,
        event: true,
        place: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.InterestingCollectionSelectionRepository.findOne({
      where: { interestingId: id },
      relations: {
        interesting: true,
        event: true,
        place: true,
      },
    });
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
