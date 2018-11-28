import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/entity/Post';
import { Session } from '../../model/entity/Session';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-posts',
  templateUrl: './adm-posts.component.html',
  styleUrls: ['./adm-posts.component.css']
})
export class AdmPostsComponent implements OnInit {

  private Posts: Post[];

  constructor(private matDialog: MatDialog, private session: Session, private router: Router) { }

  ngOnInit() {
    this.getPosts();
  }

  private async getPosts() {
    let that = this;
    this.Posts = [];
    let observable = await this.session.apiManager.PostApi.getPosts();

    await observable.subscribe(data => {
      that.Posts = data
    });
  }

  private delete(id: any) {
    this.session.apiManager.UserApi.deleteUser(id);
    this.getPosts();
  }

  private edit(id: any) {
    this.router.navigate(['/adm/posts/edit', id]);
  }

  private search(text: any) {
    let regExp = new RegExp(text, "gi");
    this.Posts = this.session.apiManager.PostApi.posts.filter((post) => !!(post._author.email.match(regExp) || post._author.name.match(regExp)));
  }

}
