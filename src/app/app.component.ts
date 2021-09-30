import { Component } from '@angular/core';
import {CounterService} from './counter.service';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(public cs: CounterService ) {}

}
