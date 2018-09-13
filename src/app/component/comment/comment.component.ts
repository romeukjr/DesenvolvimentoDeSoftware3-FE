import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../../model/entity/Session';
import { DateFormatter } from '../../model/formatter/DateFormatter';
import { Comment } from '../../model/entity/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  public dateTime: string;
  
  constructor() { }

  ngOnInit() {
    this.dateTime = DateFormatter.stringDateTime(this.comment.date);
  }

}
