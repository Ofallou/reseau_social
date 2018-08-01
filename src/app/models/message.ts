import { User } from '../../app/models/user';
import { Thread } from '../../app/models/thread';
import { uuid } from '../../app/utils/uuid';

/**
 * Message represents one message being sent in a Thread
 */
 export class Message {
   id: String;
   sentAt: Date;
   author: String;
   text: String;
   authorPicture:String;

   constructor(message:any) {
     this.id=message.id;
     this.author=message.author;
     this.sentAt=new Date()
     this.text=message.text;
    this.authorPicture=message.authorPicture;
  
   }
 }