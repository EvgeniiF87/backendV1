import { Module } from '@nestjs/common';
import { EventImagesService } from './event_images.service';
import { EventImagesResolver } from './event_images.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventImageEntity } from './entities/event_image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventImageEntity])],
  providers: [EventImagesResolver, EventImagesService],
})
export class EventImagesModule {}
