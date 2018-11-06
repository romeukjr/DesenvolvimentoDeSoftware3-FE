import { Component, OnInit } from '@angular/core';
import { User } from '../../model/entity/User';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Session } from '../../model/entity/Session';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-adm-users',
  templateUrl: './adm-users.component.html',
  styleUrls: ['./adm-users.component.css']
})
export class AdmUsersComponent implements OnInit {

  private editUserDialogComponent: EditUserDialogComponent;
  private editUserDialogRef: MatDialogRef<EditUserDialogComponent>;
  private Users: User[];

  constructor(private dialog: MatDialog, private session: Session) { }

  ngOnInit() {
    this.editUserDialogComponent = new EditUserDialogComponent(this.editUserDialogRef, this.session);

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

  private edit(index: any) {
    const that = this;
    this.openEditUserDialog(index);

    this.editUserDialogRef.afterClosed().subscribe(result => {
      if (result) {
        that.getUsers();
      }
    });
  }

  private openEditUserDialog(index: any) {
    this.editUserDialogRef = this.dialog.open(EditUserDialogComponent, {
      autoFocus: true,
      closeOnNavigation: true,
    });

    this.editUserDialogComponent.User = this.Users[index];
    this.editUserDialogRef.componentInstance = this.editUserDialogComponent;
  }
}
