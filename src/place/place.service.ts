import { Injectable } from '@nestjs/common';
import { CreatePlaceInput } from './dto/create-place.input';
import { UpdatePlaceInput } from './dto/update-place.input';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaceEntity } from './entities/place.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(PlaceEntity)
    private readonly PlaceRepository: Repository<PlaceEntity>,
  ) {}

  async create(createPlaceInput: CreatePlaceInput) {
    return await this.PlaceRepository.save({ ...createPlaceInput });
  }

  async findAll() {
    return await this.PlaceRepository.find({
      relations: {
        images: true,
        info: true,
        tags: { tags: true },
        costOption: { costOption: true },
      },
    });
  }

  async findOne(id: number) {
    return await this.PlaceRepository.findOne({
      where: { id },
      relations: {
        images: true,
        info: true,
        tags: { tags: true },
        costOption: { costOption: true },
      },
    });
  }

  async update(id: number, updatePlaceInput: UpdatePlaceInput) {
    return await this.PlaceRepository.update({ id }, { ...updatePlaceInput });
  }

  async remove(id: number) {
    await this.PlaceRepository.delete({ id });
  }
}
