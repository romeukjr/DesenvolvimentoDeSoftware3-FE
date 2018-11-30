import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { NgPlural } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Post } from '../../model/entity/Post';
import { Comment } from '../../model/entity/Comment';
import { Session } from '../../model/entity/Session';
import { DateFormatter } from '../../model/formatter/DateFormatter';
import { CommentListComponent } from '../comment-list/comment-list.component';
import { ObjectFormatter } from 'src/app/model/formatter/ObjectFormatter';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  @ViewChild('comment') public comment: NgForm;
  @Input() post: any;
  private Post: Post;
  private commentListComponent: CommentListComponent;
  private dateTime: string;

  constructor(private session: Session) { }

  ngOnInit() {
    this.Post = ObjectFormatter.postFromJson(this.post);
    this.commentListComponent = new CommentListComponent(this.session);
    this.dateTime = DateFormatter.stringDateTime(this.post.date);
  }

  private upVote(): void {
    this.Post.upVote();
  }

  private downVote(): void {
    this.Post.downVote();
  }
}
