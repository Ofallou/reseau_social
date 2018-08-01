import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subject} from 'rxjs';
import { Config } from '../../app/config'


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io(Config.SOCKET_HOST);

  constructor() { }

  //Chat message sent observable 
  messageSent(){
    let observable = new Observable<any>
    (observer=> {
      this.socket.on('message:sent', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();};
    })
    return observable;
  }

  messageSentToRoom(){
    let observable = new Observable<any>
    (observer=> {
      this.socket.on('message:sent', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();};
    })
    return observable;
  }



  onInvitationChatRequest(){
    let observable = new Observable<any>
    (observer=> {
      this.socket.on('chat:request', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();};
    })
    return observable;
  }
    
  sendMessage(data){
    this.socket.emit('sent', data);
  }

  sendChatInvitation(data){
  this.socket.emit('chat:invitationRequest', data)

  }
  sentRoom(data, room){
    
    }
    
}
  