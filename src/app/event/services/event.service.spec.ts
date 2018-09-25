import { TestBed, inject } from '@angular/core/testing';

import { EventService } from './event.service';
import { HttpClient } from '@angular/common/http';

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventService, HttpClient]
    });
  });

  it('should be created', inject([EventService], (service: EventService) => {
    expect(service).toBeTruthy();
  }));
});
