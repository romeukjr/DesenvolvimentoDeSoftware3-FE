import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { User } from '../../model/entity/User';
import { Session } from '../../model/entity/Session';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})

export class LoginComponent implements OnInit {

  private loginDialogComponent: LoginDialogComponent;
  private dialogRef: MatDialogRef<LoginDialogComponent>;
  private loggedUser: User;

  constructor(private dialog: MatDialog, private session: Session) { }

  ngOnInit() {
    this.loginDialogComponent = new LoginDialogComponent(this.dialogRef, this.session);
    this.setUpUser();
  }

  private logIn(): void {
    const that = this;
    this.openLoginDialog();
    debugger;
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        debugger;
        const user = result as User;
        //that.session.logIn(user.email, user.password);
        that.loggedUser = that.session.getUser();
      }
    });
  }

  private logOut(): void {
    this.session.logOut();
    this.loggedUser = null;
  }

  private openLoginDialog(): void {
    this.dialogRef = this.dialog.open(LoginDialogComponent, {
      autoFocus: true,
      closeOnNavigation: true,
    });

    this.dialogRef.componentInstance = this.loginDialogComponent;
  }

  private setUpUser(): void {
    if (!this.loggedUser) {
      this.loggedUser = this.session.getUser();
    }
  }
}
