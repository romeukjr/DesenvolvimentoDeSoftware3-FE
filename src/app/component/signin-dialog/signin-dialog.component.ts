import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../model/entity/User';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Session } from '../../model/entity/Session';

@Component({
  selector: 'app-signin-dialog',
  templateUrl: './signin-dialog.component.html',
  styleUrls: ['./signin-dialog.component.css']
})
export class SigninDialogComponent implements OnInit {

  @ViewChild('form') public form: NgForm;
  public isEmailRequired: boolean;
  public isEmailInvalid: boolean;
  public isPasswordInvalid: boolean;
  public isInvalidSignIn: boolean;

  constructor(public thisDialogRef: MatDialogRef<SigninDialogComponent>, private session: Session) { }

  ngOnInit() {
    this.isEmailRequired = false;
    this.isEmailInvalid = false;
    this.isPasswordInvalid = false;
    this.isInvalidSignIn = false;
  }

  private onConfirm(): void {
    this.isEmailRequired = this.checkEmailRequired();
    this.isEmailInvalid = this.checkEmailInvalid();
    this.isPasswordInvalid = this.checkPasswordInvalid();

    if (this.isEmailRequired || this.isEmailRequired || this.isPasswordInvalid) {
      return;
    }

    var user = new User(this.form.value.email, this.form.value.password);
    const userFound = this.session.apiManager.UserApi.findUser(user.email, user.password);

    if (userFound) {
      this.session.logIn(user.email, user.password);
      this.thisDialogRef.close(this.session.getUser());
    } else {
      this.isInvalidSignIn = true;
      return;
    }
  }

  private onCancel(): void {
    this.thisDialogRef.close();
  }

  private passwordChanged(): void {
    this.isPasswordInvalid = false;
  }

  private emailChanged(): void {
    this.isEmailInvalid = false;
    this.isEmailRequired = false;
  }

  private checkEmailRequired(): boolean {
    return !this.form.value.email;
  }

  private checkEmailInvalid(): boolean {
    const emailString = this.form.value.email as string;
    if (!emailString) {
      return true;
    }
    const atIndex = emailString.indexOf("@");
    const hasAtNotInFirstPos = (atIndex > 0);
    if (!hasAtNotInFirstPos) {
      return true;
    }
    const reducedEmail = emailString.substr(atIndex + 1);
    const dotIndex = reducedEmail.indexOf(".");
    const hasdotNotInFirstPos = (dotIndex > 0);
    const hasCharAfterDot = !!(reducedEmail.charAt(dotIndex + 1));
    if (!hasdotNotInFirstPos || !hasCharAfterDot) {
      return true;
    }
    return false;
  }

  private checkPasswordInvalid(): boolean {
    const passString = this.form.value.password as string;
    if (!passString) {
      return true;
    }
    const hasNumber = /\d/.test(passString);
    const hasCamelCase = /[A-Z]/.test(passString);
    if (hasNumber && hasCamelCase) {
      return false;
    }
    return true;
  }

}
