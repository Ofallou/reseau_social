import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Config } from './config';
import {Observable } from 'rxjs';
// tslint:disable-next-line:import-blacklist
import * as Rx from 'rxjs';
import {AuthService} from "./auth.service";
import {User} from "./models/user";
import { webSocket } from 'rxjs/observable/dom/webSocket';

@Injectable()
export class WebsocketService {
  constructor() {}
  
}
