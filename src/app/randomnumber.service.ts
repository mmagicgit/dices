import {Injectable} from "@angular/core";

@Injectable()
export class RandomNumberService {

  randomNumber(max: number): number {
    return Math.floor(Math.random() * max) + 1;
  }

}
