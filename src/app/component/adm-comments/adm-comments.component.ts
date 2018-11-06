import { Component, OnInit } from '@angular/core';
import { Comment } from '../../model/entity/Comment';
import { Session } from '../../model/entity/Session';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-adm-comments',
  templateUrl: './adm-comments.component.html',
  styleUrls: ['./adm-comments.component.css']
})
export class AdmCommentsComponent implements OnInit {

  private Comments: Comment[];
  constructor(private matDialog: MatDialog, private session: Session) { }

  ngOnInit() {
    this.Comments = [];
  }

}
