import { Component, OnInit } from '@angular/core';
import { User } from '../../model/entity/User';
import { MatDialog } from '@angular/material';
import { Session } from '../../model/entity/Session';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-users',
  templateUrl: './adm-users.component.html',
  styleUrls: ['./adm-users.component.css']
})
export class AdmUsersComponent implements OnInit {

  private Users: User[];

  constructor(private dialog: MatDialog, private session: Session, private router: Router) { }

  ngOnInit() {
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

}
