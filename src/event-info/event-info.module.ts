import { Module } from '@nestjs/common';
import { EventInfoService } from './event-info.service';
import { EventInfoResolver } from './event-info.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventInfoEntity } from './entities/event-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventInfoEntity])],
  providers: [EventInfoResolver, EventInfoService],
})
export class EventInfoModule {}
