import { Injectable } from '@nestjs/common';
import { CreateEventCostOptionInput } from './dto/create-event-cost-option.input';
import { InjectRepository } from '@nestjs/typeorm';
import { EventCostOptionEtity } from './entities/event-cost-option.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventCostOptionsService {
  constructor(
    @InjectRepository(EventCostOptionEtity)
    private readonly EventCostOptionRepository: Repository<EventCostOptionEtity>,
  ) {}

  async create(createEventCostOptionInput: CreateEventCostOptionInput) {
    return await this.EventCostOptionRepository.save({
      ...createEventCostOptionInput,
    });
  }

  async remove(id: number) {
    return await this.EventCostOptionRepository.delete({ id });
  }
}
