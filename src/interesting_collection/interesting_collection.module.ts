import { Module } from '@nestjs/common';
import { InterestingCollectionService } from './interesting_collection.service';
import { InterestingCollectionResolver } from './interesting_collection.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestingCollectionEntity } from './entities/interesting_collection.entity';
import { MonthService } from 'src/date-service/month.service';
import { WeekendService } from 'src/date-service/weekend.service';
import { WeekService } from 'src/date-service/week.service';
import { CurrentDayService } from 'src/date-service/current-day.service';

@Module({
  imports: [TypeOrmModule.forFeature([InterestingCollectionEntity])],
  providers: [
    InterestingCollectionResolver,
    InterestingCollectionService,
    MonthService,
    WeekendService,
    WeekService,
    CurrentDayService,
  ],
})
export class InterestingCollectionModule {}
