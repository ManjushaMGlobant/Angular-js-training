import { NgModule } from '@angular/core';

import { DayComponent } from './day.component';

@NgModule({
  declarations: [
    DayComponent
  ],
  exports: [DayComponent]
})
export class DayModule { }
