import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import * as Rx from 'rxjs/Rx';
import { environment } from '../environments/environment.prod';

@Injectable()
export class WebsocketService {

  private socket = io('http://localhost:3000');

  constructor() { }

   connect(): Rx.Subject<MessageEvent> {
       let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        // tslint:disable-next-line:quotemark
        console.log("Message from server ...");
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    let observer = {
      next: (data: Object) => {
       // tslint:disable-next-line:no-unused-expression
       this.socket.emit('message', JSON.stringify(data));
      },
    };
    return Rx.Subject.create(observer, observable);
  }

}
