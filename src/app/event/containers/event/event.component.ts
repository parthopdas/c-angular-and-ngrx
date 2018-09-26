import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Attendee } from '../../../models';
import {
  LoadAttendees,
  AddAttendee
} from '../../state/attendees/attendees.actions';
import { EventState } from '../../state';
import { getFilteredAttendees } from '../../state/attendees/attendees.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  spinner$: Observable<boolean>;
  attendees$: Observable<Attendee[]>;

  constructor(
    private store: Store<EventState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.attendees$ = this.store.pipe(select(getFilteredAttendees));
    this.store.dispatch(new LoadAttendees());
  }
​
  addAttendee(attendee: Attendee) {
    this.store.dispatch(new AddAttendee(attendee));
  }

  navigate(filterBy: string) {
    this.router.navigateByUrl(`/event?filterBy=${filterBy}`);
  }
}
