import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterService } from './counter.service';
import { NumbersComponent } from './numbers/numbers.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, NumbersComponent],
  bootstrap: [AppComponent],
  providers: [CounterService],
})
export class AppModule {}
