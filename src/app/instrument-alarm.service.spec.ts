import { TestBed, inject } from '@angular/core/testing';

import { InstrumentAlarmService } from './instrument-alarm.service';

describe('InstrumentAlarmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstrumentAlarmService]
    });
  });

  it('should ...', inject([InstrumentAlarmService], (service: InstrumentAlarmService) => {
    expect(service).toBeTruthy();
  }));
});
