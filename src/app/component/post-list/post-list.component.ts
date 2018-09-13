import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../model/entity/Post';
import { PostComponent } from '../post/post.component';
import { Session } from '../../model/entity/Session';
import { Http } from '@angular/http';
import UserAPI from '../../model/service/api/UserAPI';
import { User } from '../../model/entity/User';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  private postComponent: PostComponent;
  public a: User[];
  public lstPost: Post[];
  post1 = new Post('Lorem ipsum facilisis', 'Lorem ipsum dapibus at, conubia aenean eros commodo, feugiat nam', '', new Date(), [
    { author: "Author 1", text: "Cool glasses dawg!", date: new Date()},
    { author: "Author 2", text: "Ride Him, Cowboy!", date: new Date()},
    { author: "Author 3", text: "Give a Man a Fish", date: new Date()},
  ], 2, this.session.getUser());
  post2 = new Post('Lorem ipsum quisque', 'Lorem ipsum inceptos pulvinar sed vulputate, nunc pretium in elit', '', new Date(), [
    { author: "Author 1", text: "A Piece of Cake"},
  ]);
  post3 = new Post('Lorem ipsum lobortis', 'Lorem ipsum purus etiam morbi semper, a sociosqu malesuada senectus', '', new Date(), []);

  constructor(private session: Session) {
  }

  ngOnInit() {
    this.postComponent = new PostComponent(this.session);
    this.lstPost = [this.post1, this.post2, this.post3];
  }

  public reload(): void {
    Component.bind(this.lstPost);
  }
}
