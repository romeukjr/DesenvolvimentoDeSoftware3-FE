import { Component, OnInit } from '@angular/core';
import { Session } from '../../model/entity/Session';
import { MatDialogRef } from '@angular/material';
import { User } from '../../model/entity/User';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {

  public User: User;

  constructor(private matDialogRef: MatDialogRef<EditUserDialogComponent>, private session: Session) { }

  ngOnInit() {
  }

}
