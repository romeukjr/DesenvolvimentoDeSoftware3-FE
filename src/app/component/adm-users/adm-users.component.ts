import { Component, OnInit } from '@angular/core';
import { User } from '../../model/entity/User';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Session } from '../../model/entity/Session';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { RoleFormatter } from 'src/app/model/formatter/RoleFormatter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-users',
  templateUrl: './adm-users.component.html',
  styleUrls: ['./adm-users.component.css']
})
export class AdmUsersComponent implements OnInit {

  private editUserDialogComponent: EditUserDialogComponent;
  private editUserDialogRef: MatDialogRef<EditUserDialogComponent>;
  private Users: User[];

  constructor(private dialog: MatDialog, private session: Session, private router: Router) { }

  ngOnInit() {
    //this.editUserDialogComponent = new EditUserDialogComponent(this.editUserDialogRef, this.session);
    this.getUsers();
  }

  private async getUsers() {
    let that = this;
    this.Users = [];
    let observable = await this.session.apiManager.UserApi.getUsers();

    await observable.subscribe(data => {
      that.Users = data
    });
  }

  private delete(id: any) {
    this.session.apiManager.UserApi.deleteUser(id);
    this.getUsers();
  }

  private edit(id: any) {
    this.router.navigate(['/adm/users/edit', id]);
  }

  // private openEditUserDialog(index: any) {
  //   this.editUserDialogRef = this.dialog.open(EditUserDialogComponent, {
  //     autoFocus: true,
  //     closeOnNavigation: true,
  //   });

  //   const user = this.Users[index];
  //   this.editUserDialogComponent.Id = user._id;
  //   this.editUserDialogComponent.Name = user.name;
  //   this.editUserDialogComponent.Email = user.email;
  //   this.editUserDialogRef.componentInstance = this.editUserDialogComponent;
  // }
}
