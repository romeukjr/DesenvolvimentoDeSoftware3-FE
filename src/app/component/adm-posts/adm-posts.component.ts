import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/entity/Post';

@Component({
  selector: 'app-adm-posts',
  templateUrl: './adm-posts.component.html',
  styleUrls: ['./adm-posts.component.css']
})
export class AdmPostsComponent implements OnInit {

  private Posts: Post[];

  constructor() { }

  ngOnInit() {
    this.Posts = [];
  }

}
