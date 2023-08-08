import { Injectable } from '@nestjs/common';
import { CreateEventImageInput } from './dto/create-event_image.input';
import { UpdateEventImageInput } from './dto/update-event_image.input';
import { InjectRepository } from '@nestjs/typeorm';
import { EventImageEntity } from './entities/event_image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventImagesService {
  constructor(
    @InjectRepository(EventImageEntity)
    private readonly EventImageRepository: Repository<EventImageEntity>,
  ) {}

  async create(createEventImageInput: CreateEventImageInput) {
    return await this.EventImageRepository.save({ ...createEventImageInput });
  }

  async findAll() {
    return await this.EventImageRepository.find({ relations: { event: true } });
  }

  async findOne(id: number) {
    return await this.EventImageRepository.findOne({
      where: { id },
      relations: { event: true },
    });
  }

  async update(id: number, updateEventImageInput: UpdateEventImageInput) {
    return await this.EventImageRepository.update(
      { id },
      { ...updateEventImageInput },
    );
  }

  async remove(id: number) {
    return await this.EventImageRepository.delete({ id });
  }
}
