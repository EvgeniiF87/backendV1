import { Module } from '@nestjs/common';
import { MonthService } from './month.service';
import { WeekendService } from './weekend.service';
import { WeekService } from './week.service';
import { CurrentDayService } from './current-day.service';

@Module({
  providers: [MonthService, WeekendService, WeekService, CurrentDayService],
  exports: [MonthService, WeekendService, WeekService, CurrentDayService],
})
export class DateServiceModule {}
