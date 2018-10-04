import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { User } from '../../model/entity/User';
import { Session } from '../../model/entity/Session';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';
import { SigninDialogComponent } from '../signin-dialog/signin-dialog.component';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  private signUpDialogComponent: SignupDialogComponent;
  private signUpDialogRef: MatDialogRef<SignupDialogComponent>;
  private signInDialogComponent: SigninDialogComponent;
  private signInDialogRef: MatDialogRef<SigninDialogComponent>;
  private loggedUser: User;

  constructor(private dialog: MatDialog, private session: Session) { }

  ngOnInit() {
    this.signUpDialogComponent = new SignupDialogComponent(this.signUpDialogRef, this.session);
    this.signInDialogComponent = new SigninDialogComponent(this.signInDialogRef, this.session);
    this.setUpUser();
  }

  private signIn(): void {
    const that = this;
    this.openSignInDialog();

    this.signInDialogRef.afterClosed().subscribe(result => {
      if (result) {
        that.loggedUser = that.session.getUser();
      }
    });
  }

  private openSignInDialog(): void {
    this.signInDialogRef = this.dialog.open(SigninDialogComponent, {
      autoFocus: true,
      closeOnNavigation: true,
    });

    this.signInDialogRef.componentInstance = this.signInDialogComponent;
  }

  private signUp() {
    const that = this;
    this.openSignUpDialog();

    this.signUpDialogRef.afterClosed().subscribe(result => {});
  }

  private openSignUpDialog() {
    this.signUpDialogRef = this.dialog.open(SignupDialogComponent, {
      autoFocus: true,
      closeOnNavigation: true
    });

    this.signUpDialogRef.componentInstance = this.signUpDialogComponent;
  }

  private signOut(): void {
    this.session.logOut();
    this.loggedUser = null;
  }

  private setUpUser(): void {
    if (!this.loggedUser) {
      this.loggedUser = this.session.getUser();
    }
  }
}
