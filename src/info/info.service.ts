import { Injectable } from '@nestjs/common';
import { CreateInfoInput } from './dto/create-info.input';
import { UpdateInfoInput } from './dto/update-info.input';
import { InjectRepository } from '@nestjs/typeorm';
import { InfoEntity } from './entities/info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(InfoEntity)
    private readonly InfoRepository: Repository<InfoEntity>,
  ) {}

  async create(createInfoInput: CreateInfoInput) {
    return await this.InfoRepository.save({ ...createInfoInput });
  }

  async findAll() {
    return await this.InfoRepository.find();
  }

  async findOne(id: number) {
    return await this.InfoRepository.findBy({ id });
  }

  async update(id: number, updateInfoInput: UpdateInfoInput) {
    return await this.InfoRepository.update({ id }, { ...updateInfoInput });
  }

  async remove(id: number) {
    await this.InfoRepository.delete({ id });
  }
}
