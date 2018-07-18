import {Component, OnInit, Output} from '@angular/core';
import { User } from '../models/user';
import { HttpInterceptor} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';
import {CommentService} from '../comment.service';
import { WebsocketService } from '../websocket.service';
import { subscribeOn } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage';
import { MemberActionService } from '../member-action.service';


@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
userData = User;
step=0;
keyword = {
  name:''
};

member ={
  first_name:'',
  pseudo:'',
  _id:'',
}
currentUser_id;
messageErreur;
resultList:any[];
  constructor(private commentService: CommentService,
     private auth: AuthService,
     private afStorage:AngularFireStorage,
     private memberActionService: MemberActionService,
    
    ) {
  }

  ngOnInit() {

    this.auth.getData()
    .subscribe(
      data => {
        this.userData =  data.user;
        this.currentUser_id= data.user._id
      }
    )
    
  }

  upload(event) {
    this.afStorage.upload('/', event.target.files[0]);
    console.log('fait')
  }
 
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  

  removeFromList(member){
    

  }

  searchfriend(){
    console.log(this.keyword)
    this.memberActionService.searchResult(this.keyword)
    .subscribe(
      res => {
        //Liste non vide..
        if(res.length>0){
          this.resultList = res;
          console.log('liste amis trouvé : ',this.resultList);
        }else {
          console.log(res.message)
          this.messageErreur=res.message

        }
        
         
        
          
      })
    
  }


  sendInvitationrequest() {
    this.memberActionService.add_friend(this.resultList[0])
    .subscribe(
      res => {
        console.log('ki es ce q',res)
      }) 
  }

}