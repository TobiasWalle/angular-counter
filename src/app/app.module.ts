import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CounterComponent } from './components/counter/counter.component';
import { NumberButtonComponent } from './components/number-button/number-button.component';
import { NumberDisplayComponent } from './components/number-display/number-display.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    NumberButtonComponent,
    NumberDisplayComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
