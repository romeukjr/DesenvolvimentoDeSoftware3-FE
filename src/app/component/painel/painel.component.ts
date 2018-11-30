
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { PostListComponent } from '../post-list/post-list.component';
import { Post } from '../../model/entity/Post';
import { User } from '../../model/entity/User';
import { StorageService } from '../../model/service/Storage';
import constants from '../../util/Constants';
import { Session } from '../../model/entity/Session';
import { Http } from '@angular/http';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit {

  @ViewChild('btnCreatePost', {read: ElementRef}) btnCreatePost: ElementRef;
  @ViewChild(PostListComponent) postList: PostListComponent;
  public userLinks:String[] = [
    "Romeu",
    "Arthur",
    "Isaque"
  ];

  private postListComponent: PostListComponent;
  private postDialogComponent: PostDialogComponent;
  private dialogRef: MatDialogRef<PostDialogComponent>;

  constructor(private dialog: MatDialog, private session: Session) { }

  ngOnInit() {
    this.postListComponent = new PostListComponent(this.session);
    this.postDialogComponent = new PostDialogComponent(this.dialogRef, this.session);
  }

  private openCreatePostDialog() {
    this.dialogRef = this.dialog.open(PostDialogComponent, {
      autoFocus: true,
      closeOnNavigation: true,
    });
    this.dialogRef.componentInstance = this.postDialogComponent;

    let that = this;
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        that.postList.lstPost.unshift(result);
        //that.postList.reload();
        that.postListComponent.lstPost.push(result);
      }
    });
  }
}
