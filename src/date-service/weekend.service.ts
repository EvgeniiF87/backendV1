import { Injectable } from '@nestjs/common';

@Injectable()
export class WeekendService {
  private day = {
    1: 5,
    2: 4,
    3: 3,
    4: 2,
    5: 1,
    6: 0,
  };
  private date: Date;

  private Saturday: string;
  private Sunday: string;

  constructor() {
    this.date = new Date();
  }

  private searchWeekend(days: number) {
    //суббота
    const Sat =
      new Date().getDay() !== 0 &&
      new Date(this.date.setDate(this.date.getDate() + days));

    //воскресенье
    const Sun =
      new Date().getDay() === 0
        ? new Date()
        : new Date(this.date.setDate(this.date.getDate() + 1));

    new Date().getDay() !== 0 && Sat.setHours(+'02');
    Sun.setHours(+'02');
    return { Sat, Sun };
  }
  getWeekend() {
    this.Saturday = '';
    this.Sunday = '';
    this.date = new Date();

    for (let i = 0; i <= 6; i++) {
      if (this.date.getDay() === i) {
        const { Sat, Sun } = this.searchWeekend(this.day[i]);
        this.Saturday = Sat && `${Sat.toISOString().substring(0, 10)} 02:00:00`;
        this.Sunday = `${Sun.toISOString().substring(0, 10)} 02:00:00`;
      }
    }
    return { Saturday: this.Saturday, Sunday: this.Sunday };
  }
}
