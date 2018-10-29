import { Component, OnInit } from '@angular/core';
import { User } from '../../model/entity/User';

@Component({
  selector: 'app-adm-users',
  templateUrl: './adm-users.component.html',
  styleUrls: ['./adm-users.component.css']
})
export class AdmUsersComponent implements OnInit {

  private Users: User[];

  constructor() { }

  ngOnInit() {
    this.Users = [];
  }

}
