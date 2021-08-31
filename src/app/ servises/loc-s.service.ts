import { Injectable } from '@angular/core';

@Injectable()
export class LocSService {
  pole = 0
  metod1 () {
    this.pole++
  }
  metod2 () {
    this.pole--
  }
}
