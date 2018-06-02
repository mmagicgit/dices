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

  singleThrowResult: number = 0;
  multipleThrowResult: number[] = [0];

  onButtonClickSingle(numberOfThrows: string, type: string, offset: string) {
    this.singleThrowResult = parseInt(numberOfThrows) * AppComponent.randomNumber(parseInt(type)) + parseInt(offset);
  }

  onButtonClickMultiple(numberOfThrows: string, type: string) {
    let result: number[] = new Array(parseInt(numberOfThrows));
    for(let i = 0; i<parseInt(numberOfThrows); i++) {
      result[i] = AppComponent.randomNumber(parseInt(type));
    }
    this.multipleThrowResult = result;
  }

  static randomNumber(max: number): number {
    return Math.floor(Math.random() * max) + 1
  }

}
