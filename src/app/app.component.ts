import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Crazy Dices';
  numberOfThrows: number[] = [1, 2, 3];
  diceTypes: number[] = [6, 20];

  singleThrowResult = 0;
  multipleThrowResult = 0;

  multipleThrow(): void {
    this.multipleThrowResult++;
  }

  onButtonClickSingle(numberOfThrows: string, type: string) {
    this.singleThrowResult = parseInt(numberOfThrows) + parseInt(type);
  }

}
