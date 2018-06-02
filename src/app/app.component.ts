import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Crazy Dices';
  singleThrowResult = 55;

  singleThrow(): void {
    this.singleThrowResult++;
  }

  multipleThrow(): void {

  }

}
