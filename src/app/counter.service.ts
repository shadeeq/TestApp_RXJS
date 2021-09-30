import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

export interface iState {
  firstNum: number;
  secondNum: number;
  isActive: boolean;
}

@Injectable()
export class CounterService {
  private _state: iState = {
    firstNum: -5,
    secondNum: 10,
    isActive: false,
  };

  countDown;

  public state$ = new BehaviorSubject<iState>(this._state);

  incFirst() {
    this._state = {
      ...this._state,
      firstNum: ++this._state.firstNum,
    };
    this.state$.next(this._state);
  }

  decSecond() {
    this._state = {
      ...this._state,
      secondNum: --this._state.secondNum,
    };
    this.state$.next(this._state);
  }

  change() {
    if (!this._state.isActive) {
      this._state.isActive = true;
      this.countDown = interval(1000).subscribe(() => {
        this.incFirst();
        this.decSecond();
        this.decSecond();
      });
    }
  }

  pause() {
    if (this._state.isActive) {
      this._state.isActive = false;
      this.countDown.unsubscribe();
    }
  }

  reset() {
    this._state = {
      ...this._state,
      firstNum: -5,
      secondNum: 10,
    };
    this.state$.next(this._state);
  }
}
