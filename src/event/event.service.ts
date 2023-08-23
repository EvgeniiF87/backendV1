import { Injectable } from '@nestjs/common';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEntity } from './entities/event.entity';
import { Repository } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly EventRepository: Repository<EventEntity>,
  ) {}

  async create(createEventInput: CreateEventInput) {
    const preview = `${uuidV4()}.jpeg`;
    return await this.EventRepository.save({ ...createEventInput, preview });
  }

  async findAll() {
    return await this.EventRepository.find({
      relations: {
        images: true,
        info: true,
        tags: { tags: true },
        costOption: { costOption: true },
      },
    });
  }

  async findOne(id: number) {
    return await this.EventRepository.findOne({
      where: { id },
      relations: {
        images: true,
        info: true,
        tags: { tags: true },
        costOption: { costOption: true },
      },
    });
  }

  async update(id: number, updateEventInput: UpdateEventInput) {
    return await this.EventRepository.update({ id }, { ...updateEventInput });
  }

  async remove(id: number) {
    await this.EventRepository.delete({ id });
  }
}
