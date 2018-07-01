import { Component, OnInit } from '@angular/core';
import { MemberActionService } from '../member-action.service';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})

export class MemberSearchComponent implements OnInit {
  keyword={
    name:''
  }
  constructor(private memberActionService: MemberActionService) { }

  ngOnInit() {
  }

  searchMember(){
    console.log(this.keyword)
    this.memberActionService.searchResult(this.keyword)
    .subscribe(
      res => {
        
        console.log('',res)
      }
    )
    //console.log(this.keyword);
    }
}
