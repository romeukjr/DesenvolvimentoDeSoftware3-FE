import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Session } from '../../model/entity/Session';
import { MatDialog } from '@angular/material';
import { User } from '../../model/entity/User';
import { Router } from '@angular/router';
import { Role } from 'src/app/model/entity/Role';
import { RoleFormatter } from 'src/app/model/formatter/RoleFormatter';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @ViewChild("userName") UserName: ElementRef;
  @ViewChild("userEmail") UserEmail: ElementRef;
  @ViewChild("userRole") UserRole: ElementRef;
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

  private async update() {
    let res;
    this.loadUserInfo();
    let observer = await this.session.apiManager.UserApi.updateUser(this.User);

    await observer.subscribe((response: any) => {
      res = response;
    });
  }

  private loadUserInfo() {
    this.User.name = this.UserName.nativeElement.value;
    this.User.email = this.UserEmail.nativeElement.value;
    this.User.role = this.UserRole.nativeElement.selectedIndex+1;
    this.User.roleDescription = RoleFormatter.roleToString(this.User.role);
  }
}
