import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.css']
})
export class NumberButtonComponent {
  @Input() public value: number;
  @Input() public step: number;
  @Input() public mode: NumberButtonMode;

  @Output() public valueChange = new EventEmitter<number>();

  public onClick(): void {
    this.value = numberButtonModeConfiguration[this.mode].update(
      this.value,
      this.step
    );
    this.valueChange.emit(this.value);
  }

  public getMathSymbol(): string {
    return numberButtonModeConfiguration[this.mode].symbol;
  }
}

export enum NumberButtonMode {
  increment = 'increment',
  decrement = 'decrement'
}

const numberButtonModeConfiguration = {
  [NumberButtonMode.increment]: {
    update: (value: number, step: number) => value + step,
    symbol: '+'
  },
  [NumberButtonMode.decrement]: {
    update: (value: number, step: number) => value - step,
    symbol: '-'
  }
};
