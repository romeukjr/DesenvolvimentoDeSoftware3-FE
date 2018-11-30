import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../../model/entity/Session';
import { CommentComponent } from '../comment/comment.component';
import { Post } from '../../model/entity/Post';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() post: Post;
  public showComments: boolean = false;

  constructor(private session: Session) { }

  ngOnInit() {
    this.post.comments = [];
  }

  private toggleCommentVisibility(): void {
    this.showComments = !this.showComments;
    event.preventDefault();
  }
}
