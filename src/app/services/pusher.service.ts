import { Injectable } from '@angular/core';
import * as Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  private _pusher: any;
  constructor() {

    this._pusher = new Pusher('521f11269cd19399247e', {
      cluster: 'eu',
      encrypted: true
    });
   }



   getPusher() {
    return this._pusher;
  }
}
