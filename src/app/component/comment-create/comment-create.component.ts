import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Session } from '../../model/entity/Session';
import { Post } from '../../model/entity/Post';
import { Comment } from '../../model/entity/Comment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  @Input() post: Post;
  
  constructor(private session: Session) { }

  ngOnInit() {
  }

  private onSubmitComment(commentForm: any): void {
    const comment: Comment = new Comment(this.post, this.session.getUser(), commentForm.form.value.text, "", new Date());
    this.post.addComment(comment);
  }

  private isCommentDisabled(comment: any): boolean {
    return !comment.form.value.text;
  }
}
