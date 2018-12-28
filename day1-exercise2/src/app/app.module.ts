import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WelcomeComponent } from './welcome.component';
import { DayComponent } from './day.component';

import { HelloModule } from './hello.module';

@NgModule({
  declarations: [
    AppComponent,
    //HelloComponent,
    WelcomeComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    HelloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
