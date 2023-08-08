import { Injectable } from '@nestjs/common';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEntity } from './entities/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly EventRepository: Repository<EventEntity>,
  ) {}

  async create(createEventInput: CreateEventInput) {
    return await this.EventRepository.save({ ...createEventInput });
  }

  async findAll() {
    return await this.EventRepository.find({
      relations: {
        images: true,
        info: true,
        eventTag: { tag: true },
        eventCostOption: { costOption: true },
      },
    });
  }

  async findOne(id: number) {
    return await this.EventRepository.findOne({
      where: { id },
      relations: {
        images: true,
        info: true,
        eventTag: { tag: true },
        eventCostOption: { costOption: true },
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
