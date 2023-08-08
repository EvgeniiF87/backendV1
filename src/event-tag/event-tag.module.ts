import { Module } from '@nestjs/common';
import { EventTagService } from './event-tag.service';
import { EventTagResolver } from './event-tag.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventTagEntity } from './entities/event-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventTagEntity])],
  providers: [EventTagResolver, EventTagService],
})
export class EventTagModule {}
