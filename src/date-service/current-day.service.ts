import { Injectable } from '@nestjs/common';

@Injectable()
export class CurrentDayService {
  getCurrentDay() {
    return new Date().toISOString().substring(0, 10) + ' 02:00:00';
  }
}
