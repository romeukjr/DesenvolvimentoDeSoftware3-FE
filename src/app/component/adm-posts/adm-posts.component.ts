import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/entity/Post';
import { Session } from '../../model/entity/Session';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-adm-posts',
  templateUrl: './adm-posts.component.html',
  styleUrls: ['./adm-posts.component.css']
})
export class AdmPostsComponent implements OnInit {

  private Posts: Post[];

  constructor(private matDialog: MatDialog, private session: Session) { }

  ngOnInit() {
    this.Posts = [];
  }

}
