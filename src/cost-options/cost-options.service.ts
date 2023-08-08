import { Injectable } from '@nestjs/common';
import { CreateCostOptionInput } from './dto/create-cost-option.input';
import { InjectRepository } from '@nestjs/typeorm';
import { CostOptionEntity } from './entities/cost-option.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CostOptionsService {
  constructor(
    @InjectRepository(CostOptionEntity)
    private readonly CostOptionRepository: Repository<CostOptionEntity>,
  ) {}
  async create(createCostOptionInput: CreateCostOptionInput) {
    return await this.CostOptionRepository.save({ ...createCostOptionInput });
  }

  async remove(id: number) {
    return await this.CostOptionRepository.delete({ id });
  }
}
