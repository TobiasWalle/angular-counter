import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public value = 0;
  public step = 1;

  public onValueChange(newValue: number): void {
    this.value = newValue;
  }
}
