import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Post } from '../../model/entity/Post';
import { Session } from '../../model/entity/Session';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})

export class PostDialogComponent implements OnInit {

  @ViewChild('form') public form: NgForm;

  constructor(private thisDialogRef: MatDialogRef<PostDialogComponent>, private session: Session) { }

  ngOnInit() {
  }

  private onSubmitPost(): void {
    const title = this.form.value.title
    const text = this.form.value.text
    const post = new Post(title, text, "", new Date(), [], 0, this.session.getUser());
    
    this.session.apiManager.PostApi.createPost(post);
    this.thisDialogRef.close(post);
  }

  private onClose(): void {
    this.thisDialogRef.close();
  }

  private isPostInvalid(): boolean {
    const formValue = this.form.value;
    return !(formValue.text && formValue.title);
  }
}
