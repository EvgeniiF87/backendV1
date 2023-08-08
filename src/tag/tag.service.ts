import { Injectable } from '@nestjs/common';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { InjectRepository } from '@nestjs/typeorm';
import { TagEntity } from './entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly TagRepository: Repository<TagEntity>,
  ) {}

  async create(createTagInput: CreateTagInput) {
    return await this.TagRepository.save({ ...createTagInput });
  }

  async findAll() {
    return await this.TagRepository.find();
  }

  async findOne(id: number) {
    return await this.TagRepository.findOneBy({ id });
  }

  async update(id: number, updateTagInput: UpdateTagInput) {
    await this.TagRepository.update({ id }, { ...updateTagInput });

    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.TagRepository.delete({ id });
  }
}
