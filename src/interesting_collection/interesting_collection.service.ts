import { Injectable } from '@nestjs/common';
import { CreateInterestingCollectionInput } from './dto/create-interesting_collection.input';
import { UpdateInterestingCollectionInput } from './dto/update-interesting_collection.input';
import { InjectRepository } from '@nestjs/typeorm';
import { InterestingCollectionEntity } from './entities/interesting_collection.entity';
import { Raw, Repository } from 'typeorm';
import { MonthService } from 'src/date-service/month.service';
import { WeekendService } from 'src/date-service/weekend.service';
import { WeekService } from 'src/date-service/week.service';
import { CurrentDayService } from 'src/date-service/current-day.service';

@Injectable()
export class InterestingCollectionService {
  constructor(
    @InjectRepository(InterestingCollectionEntity)
    private readonly InterestingCollectionRepository: Repository<InterestingCollectionEntity>,
    private readonly currentDayService: CurrentDayService,
    private readonly monthService: MonthService,
    private readonly weekendService: WeekendService,
    private readonly weekService: WeekService,
  ) {}

  async create(
    createInterestingCollectionInput: CreateInterestingCollectionInput,
  ) {
    return await this.InterestingCollectionRepository.save({
      ...createInterestingCollectionInput,
      dateStart: createInterestingCollectionInput.existTimeStart,
      dateEnd: createInterestingCollectionInput.existTimeEnd,
    });
  }

  async findAllCurrentDayCount(catId?: number) {
    if (catId) {
      const count = await this.InterestingCollectionRepository.find({
        where: {
          dateStart: Raw((alias) => `${alias} = :date`, {
            date: this.currentDayService.getCurrentDay(),
          }),

          existTimeStart: Raw((alias) => `${alias} = :dateStart`, {
            dateStart: this.currentDayService.getCurrentDay(),
          }),

          category: {
            categoryId: catId,
          },
        },
      });

      return count.length;
    } else {
      const count = await this.InterestingCollectionRepository.find({
        where: {
          dateStart: Raw((alias) => `${alias} >= :date`, {
            date: this.currentDayService.getCurrentDay(),
          }),

          existTimeStart: Raw((alias) => `${alias} <= :dateStart`, {
            dateStart: this.currentDayService.getCurrentDay(),
          }),
        },
      });

      return count.length;
    }
  }

  async findAllCurrentDay(catId?: number, take?: number, skip?: number) {
    if (catId) {
      return await this.InterestingCollectionRepository.find({
        where: {
          dateStart: Raw((alias) => `${alias} = :date`, {
            date: this.currentDayService.getCurrentDay(),
          }),

          existTimeStart: Raw((alias) => `${alias} = :dateStart`, {
            dateStart: this.currentDayService.getCurrentDay(),
          }),

          category: {
            categoryId: catId,
          },
        },
        order: {
          priorities: 'DESC',
        },
        take: take && take,
        skip: skip && skip,
      });
    } else {
      return await this.InterestingCollectionRepository.find({
        where: {
          dateStart: Raw((alias) => `${alias} >= :date`, {
            date: this.currentDayService.getCurrentDay(),
          }),

          existTimeStart: Raw((alias) => `${alias} <= :dateStart`, {
            dateStart: this.currentDayService.getCurrentDay(),
          }),
        },
        order: {
          priorities: 'DESC',
        },
        take: take && take,
        skip: skip && skip,
      });
    }
  }

  async findAllWeekendCount(catId?: number) {
    const { Saturday, Sunday } = this.weekendService.getWeekend();

    const count = await this.InterestingCollectionRepository.find({
      where: {
        dateStart: Raw((alias) => `${alias} >= :date`, {
          date: Saturday,
        }),

        existTimeStart: Raw((alias) => `${alias} <= :dateStart`, {
          dateStart: Sunday,
        }),

        category: {
          categoryId: catId && catId,
        },
      },
    });

    return count.length;
  }

  async findAllWeekend(catId?: number, take?: number, skip?: number) {
    const { Saturday, Sunday } = this.weekendService.getWeekend();

    return await this.InterestingCollectionRepository.find({
      where: {
        dateStart: Raw((alias) => `${alias} >= :date`, {
          date: Saturday,
        }),

        existTimeStart: Raw((alias) => `${alias} <= :dateStart`, {
          dateStart: Sunday,
        }),

        category: {
          categoryId: catId && catId,
        },
      },
      order: {
        priorities: 'DESC',
      },
      take: take && take,
      skip: skip && skip,
    });
  }

  async findAllWeekCount(catId?: number) {
    const { Monday, Sunday } = this.weekService.getWeek();

    const count = await this.InterestingCollectionRepository.find({
      where: {
        dateStart: Raw((alias) => `${alias} >= :date`, {
          date: Monday,
        }),
        existTimeStart: Raw((alias) => `${alias} <= :dateStart`, {
          dateStart: Sunday,
        }),
        category: {
          categoryId: catId && catId,
        },
      },
    });

    return count.length;
  }

  async findAllWeek(catId?: number, take?: number, skip?: number) {
    const { Monday, Sunday } = this.weekService.getWeek();

    return await this.InterestingCollectionRepository.find({
      where: {
        dateStart: Raw((alias) => `${alias} >= :date`, {
          date: Monday,
        }),
        existTimeStart: Raw((alias) => `${alias} <= :dateStart`, {
          dateStart: Sunday,
        }),
        category: {
          categoryId: catId && catId,
        },
      },

      order: {
        priorities: 'DESC',
      },
      take: take && take,
      skip: skip && skip,
    });
  }

  async findAllMonthCount(catId?: number) {
    const { firstDay, lastDay } = this.monthService.getMonth();
    const count = await this.InterestingCollectionRepository.find({
      where: {
        dateStart: Raw((alias) => `${alias} >= :date`, {
          date: firstDay,
        }),
        existTimeStart: Raw((alias) => `${alias} <= :dateStart`, {
          dateStart: lastDay,
        }),
        category: {
          categoryId: catId && catId,
        },
      },
    });

    return count.length;
  }

  async findAllMonth(catId?: number, take?: number, skip?: number) {
    const { firstDay, lastDay } = this.monthService.getMonth();
    return await this.InterestingCollectionRepository.find({
      where: {
        dateStart: Raw((alias) => `${alias} >= :date`, {
          date: firstDay,
        }),
        existTimeStart: Raw((alias) => `${alias} <= :dateStart`, {
          dateStart: lastDay,
        }),
        category: {
          categoryId: catId && catId,
        },
      },
      order: {
        priorities: 'DESC',
      },
      take: take && take,
      skip: skip && skip,
    });
  }

  async findOne(id: number) {
    return await this.InterestingCollectionRepository.findOne({
      where: { id },
      relations: {
        collection: {
          event: true,
          place: true,
        },
      },
    });
  }

  async update(
    id: number,
    updateInterestingCollectionInput: UpdateInterestingCollectionInput,
  ) {
    return await this.InterestingCollectionRepository.update(
      { id },
      { ...updateInterestingCollectionInput },
    );
  }

  async remove(id: number) {
    return await this.InterestingCollectionRepository.delete({ id });
  }
}
