import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
//import { Observable, Subject} from 'rxjs';
import { Config } from '../../src/app/config';
import { Router } from '@angular/router';
import { User } from '../../src/app/models/user';

@Injectable({
  providedIn: 'root'
})


export class ChatService {
  url = Config.SOCKET_HOST || "http://localhost";
  private socket = io(Config.SOCKET_HOST);
  private _chatFriendList= this.url+'/api/friends'

  user= User;
  constructor(private http: HttpClient, private _router: Router) {

   }

 


}
