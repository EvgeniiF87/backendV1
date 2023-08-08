import { Injectable } from '@nestjs/common';
import { CreateEventTagInput } from './dto/create-event-tag.input';
import { InjectRepository } from '@nestjs/typeorm';
import { EventTagEntity } from './entities/event-tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventTagService {
  constructor(
    @InjectRepository(EventTagEntity)
    private readonly EventTagRepository: Repository<EventTagEntity>,
  ) {}

  async create(createEventTagInput: CreateEventTagInput) {
    return await this.EventTagRepository.save({ ...createEventTagInput });
  }

  async remove(id: number) {
    await this.EventTagRepository.delete({ id });
    return { id };
  }
}
