import { Module } from '@nestjs/common';
import { EventCostOptionsService } from './event-cost-options.service';
import { EventCostOptionsResolver } from './event-cost-options.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventCostOptionEtity } from './entities/event-cost-option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventCostOptionEtity])],
  providers: [EventCostOptionsResolver, EventCostOptionsService],
})
export class EventCostOptionsModule {}
