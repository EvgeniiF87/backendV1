import { Injectable } from '@nestjs/common';

@Injectable()
export class MonthService {
  private currentMonth: number;
  private currentYear: number;
  private date: Date;

  constructor() {
    this.date = new Date();
    this.currentMonth = this.date.getMonth() + 1;
    this.currentYear = this.date.getFullYear();
  }

  getMonth() {
    const firstDayMonth = new Date(this.date.setDate(1));
    const lastDayMonth = new Date(
      this.date.setFullYear(this.currentYear, this.currentMonth, 0),
    );

    const firstDay = `${firstDayMonth.toISOString().substring(0, 10)} 02:00:00`;
    const lastDay = `${lastDayMonth.toISOString().substring(0, 10)} 02:00:00`;

    return { firstDay, lastDay };
  }
}
