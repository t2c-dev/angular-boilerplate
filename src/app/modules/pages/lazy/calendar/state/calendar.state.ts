import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CalendarApi } from '../api/calendar.api.service';
import { FetchCalendar } from './calendar.action';

interface CalendarStateModel {
  calendar: unknown;
}

class CalendarStateModel {
  constructor() {
    this.calendar = undefined;
  }
}

export const CALENDAR_STATE_TOKEN = new StateToken<CalendarStateModel>(
  'calendar',
);
@State({
  name: CALENDAR_STATE_TOKEN,
  defaults: new CalendarStateModel(),
})
@Injectable()
export class CalendarState {
  constructor(private calendarApi: CalendarApi) {}

  @Selector([CALENDAR_STATE_TOKEN])
  static calendar(state: CalendarStateModel): unknown {
    return state.calendar;
  }

  @Action(FetchCalendar)
  public setCatalogs(
    ctx: StateContext<CalendarStateModel>,
  ): Observable<unknown> {
    return this.calendarApi.fetch().pipe(
      tap(calendar => {
        ctx.patchState({ calendar });
      }),
    );
  }
}
