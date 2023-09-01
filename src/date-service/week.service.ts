import { Injectable } from '@nestjs/common';

@Injectable()
export class WeekService {
  private day = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
    0: 0,
  };

  private plusDay = {
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1,
    0: 0,
  };

  private date: Date;
  private Monday: string;
  private Sunday: string;

  constructor() {
    this.date = new Date();
  }

  private searchWeek(days: number) {
    //понедельник
    const Mon =
      this.date.getDay() === 1
        ? new Date()
        : new Date(this.date.setDate(this.date.getDate() - days));

    //воскресенье
    const Sun =
      this.date.getDay() === 0
        ? new Date()
        : new Date(
            this.date.setDate(
              this.date.getDate() + this.plusDay[this.date.getDay()],
            ),
          );

    this.date.getDay() !== 0 && Mon.setHours(+'02');
    Sun.setHours(+'02');

    return { Mon, Sun };
  }

  getWeek() {
    this.Monday = '';
    this.Sunday = '';
    this.date = new Date();

    for (let i = 0; i <= 6; i++) {
      if (this.date.getDay() === i) {
        const { Mon, Sun } = this.searchWeek(this.day[i]);
        this.Monday = Mon && `${Mon.toISOString().substring(0, 10)} 02:00:00`;

        this.Sunday = `${Sun.toISOString().substring(0, 10)} 02:00:00`;
      }
    }

    return { Monday: this.Monday, Sunday: this.Sunday };
  }
}
