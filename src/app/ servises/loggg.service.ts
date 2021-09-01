import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogggService {
  log(text) {
    console.log(`log: ${text}`);
  }
}
