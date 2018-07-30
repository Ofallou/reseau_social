import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subject} from 'rxjs';
import { Config } from '../../src/app/config';

@Injectable({
  providedIn: 'root'
})


export class ChatService {
  url = Config.SOCKET_HOST || "http://localhost";
  private socket = io(Config.SOCKET_HOST);

  constructor() {


   }

   

}
