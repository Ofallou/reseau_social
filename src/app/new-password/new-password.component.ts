import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialogRef,MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { LostPasswordComponent } from '../lost-password/lost-password.component';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewPasswordComponent> ) { }

  ngOnInit() {

    
  }

}
