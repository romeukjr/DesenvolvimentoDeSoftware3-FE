import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Session } from '../../model/entity/Session';
import { MatDialogRef, MatDialog } from '@angular/material';
import { User } from '../../model/entity/User';
import { Router } from '@angular/router';
import { RoleFormatter } from 'src/app/model/formatter/RoleFormatter';
import { Role } from 'src/app/model/entity/Role';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {

  public Roles: Role;
  public User: User;

  constructor(private matDialog: MatDialog, private session: Session, private router: Router) { }

  ngOnInit() {
    this.User = new User(null, null);
    this.loadUser();
  }

  private async loadUser() {
    const id = this.getUserIdFromUrl();

    let that = this;
    let observable = await this.session.apiManager.UserApi.getUser(id);
    
    observable.subscribe((user: User) => {
      that.User = user;
    });
  }

  private getUserIdFromUrl() {
    const splitedUrl = this.router.url.split('/');

    return !!splitedUrl[splitedUrl.length - 1] ? splitedUrl[splitedUrl.length - 1] : null;
  }

  private isRoleRegular(userRole: Role): boolean {
    return userRole == Role.REGULAR;
  }

  private isRoleAdm(userRole: Role): boolean {
    return userRole == Role.ADM;
  }
}
