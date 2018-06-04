import { Component } from '@angular/core';
import { RandomNumberService } from "./randomnumber.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RandomNumberService]
})
export class AppComponent {

  constructor(private _randomNumberService: RandomNumberService) {
  }

  title: string = 'Crazy Dices';
  numberOfThrows: number[] = [1, 2, 3];
  diceTypes: number[] = [6, 20];

  singleThrowResult: number = 0;
  multipleThrowResult: number[] = [0];

  onButtonClickSingle(numberOfThrows: string, type: string, offset: string) {
    this.singleThrowResult = parseInt(numberOfThrows) * this._randomNumberService.randomNumber(parseInt(type)) + parseInt(offset);
  }

  onButtonClickMultiple(numberOfThrows: string, type: string) {
    let result: number[] = new Array(parseInt(numberOfThrows));
    for(let i = 0; i<parseInt(numberOfThrows); i++) {
      result[i] = this._randomNumberService.randomNumber(parseInt(type));
    }
    this.multipleThrowResult = result;
  }

}
