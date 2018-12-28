import {
  Component
} from '@angular/core';

@Component({
  selector: 'day',
  template: `<div>Today is {{ day }}</div>`
})
export class DayComponent {
  weekday = ["Monday", "Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  day = this.weekday[new Date().getDay()]
};
