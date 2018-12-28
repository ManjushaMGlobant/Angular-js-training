import { Component } from '@angular/core';
import * as Moment from 'moment';

@Component({
  selector: 'day',
  template: `<div>Today is {{ day }}</div>`
})
export class DayComponent {
  day = Moment().format('dddd');
}
