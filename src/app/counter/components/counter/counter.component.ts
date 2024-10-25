import { Component} from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>Counter {{counter}}</h1>
<button (click)="increaseBy(+1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>
    `
})

export class CounterComponent {
    constructor() { }

    reset() {
        this.counter = 10;
    }
    public counter: number = 10;

    increaseBy(value: number): void {
        this.counter += value;
    }
}