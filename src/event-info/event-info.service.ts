import { Injectable } from '@nestjs/common';
import { CreateEventInfoInput } from './dto/create-event-info.input';
import { UpdateEventInfoInput } from './dto/update-event-info.input';
import { InjectRepository } from '@nestjs/typeorm';
import { EventInfoEntity } from './entities/event-info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventInfoService {
  constructor(
    @InjectRepository(EventInfoEntity)
    private readonly EventInfoRepository: Repository<EventInfoEntity>,
  ) {}

  async create(createEventInfoInput: CreateEventInfoInput) {
    return await this.EventInfoRepository.save({ ...createEventInfoInput });
  }

  async findOne(id: number) {
    return await this.EventInfoRepository.findOneBy({ id });
  }

  async update(id: number, updateEventInfoInput: UpdateEventInfoInput) {
    await this.EventInfoRepository.update(
      { id },
      {
        ...updateEventInfoInput,
      },
    );

    return this.findOne(id);
  }
}
