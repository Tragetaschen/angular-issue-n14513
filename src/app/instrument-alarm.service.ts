import { Injectable } from '@angular/core';
import { AlarmService } from './alarm.service';

@Injectable()
export class InstrumentAlarmService extends AlarmService {
  constructor() {
    super(true);
  }
}
