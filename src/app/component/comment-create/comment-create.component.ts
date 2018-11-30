import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Session } from '../../model/entity/Session';
import { Post } from '../../model/entity/Post';
import { Comment } from '../../model/entity/Comment';
import { NgForm } from '@angular/forms';
import { ObjectFormatter } from 'src/app/model/formatter/ObjectFormatter';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  @Input() post: JSON;
  private Post: Post;
  
  constructor(private session: Session) { }

  ngOnInit() {
    this.Post = ObjectFormatter.postFromJson(this.post);
  }

  private onSubmitComment(commentForm: any): void {
    const comment: Comment = new Comment(this.Post, this.session.getUser(), commentForm.form.value.text, "", new Date());
    this.Post.addComment(comment);
  }

  private isCommentDisabled(comment: any): boolean {
    return !comment.form.value.text;
  }
}
