import { Component, OnInit } from '@angular/core';
import { Comment } from '../../model/entity/Comment';

@Component({
  selector: 'app-adm-comments',
  templateUrl: './adm-comments.component.html',
  styleUrls: ['./adm-comments.component.css']
})
export class AdmCommentsComponent implements OnInit {

  private Comments: Comment[];
  constructor() { }

  ngOnInit() {
    this.Comments = [];
  }

}
