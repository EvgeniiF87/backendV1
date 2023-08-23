import { Injectable } from '@nestjs/common';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';
import { InjectRepository } from '@nestjs/typeorm';
import { ImageEntity } from './entities/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(ImageEntity)
    private readonly ImageRepository: Repository<ImageEntity>,
  ) {}

  async create(createImageInput: CreateImageInput) {
    return await this.ImageRepository.save({ ...createImageInput });
  }

  async findAll() {
    return await this.ImageRepository.find();
  }

  async findOne(id: number) {
    return await this.ImageRepository.findBy({ id });
  }

  async update(id: number, updateImageInput: UpdateImageInput) {
    return await this.ImageRepository.update({ id }, { ...updateImageInput });
  }

  async remove(id: number) {
    await this.ImageRepository.delete({ id });
  }
}
