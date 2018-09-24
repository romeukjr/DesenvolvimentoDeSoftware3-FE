import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Session } from '../../model/entity/Session';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private signupDialogComponent: SignupDialogComponent;
  private dialogRef: MatDialogRef<SignupDialogComponent>;

  constructor(private dialog: MatDialog, private session: Session) { }

  ngOnInit() {
    this.signupDialogComponent = new SignupDialogComponent(this.dialogRef, this.session);
  }

  private signUp() {
    const that = this;
    debugger;
    this.openSignUpDialog();

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        debugger;
        
      }
    });
  }

  private openSignUpDialog() {
    this.dialogRef = this.dialog.open(SignupDialogComponent, {
      autoFocus: true,
      closeOnNavigation: true
    });

    this.dialogRef.componentInstance = this.signupDialogComponent;
  }

}
