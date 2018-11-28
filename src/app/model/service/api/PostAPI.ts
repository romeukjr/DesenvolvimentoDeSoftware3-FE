import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import constants from '../../../util/Constants';
import API from './API';
import { Post } from '../../entity/Post';
import { Comment } from '../../entity/Comment';

export default class PostAPI {
    private REQUEST_URL = constants.API.POST;
    private api: API<Post>;
    public posts: Post[];

    constructor(private http: Http) {
        this.assemble();
    }

    private assemble(): void {
        this.api = new API<Post>(this.http);
        this.getPosts();
    }

    public async getPosts() {
        let observer = await this.api.getDataCollection(this.REQUEST_URL);

        await observer.subscribe((data: Post[]) => {
            this.posts =  data;
        });

        return observer;
    }

    public async getPost(id: string): Promise<Post> {
        let post: Post;

        let observer = await this.api.getData(this.REQUEST_URL + "/" + id);
        await observer.subscribe((data: Post) => {
            post = data
        });

        return post;
    }

    public createPost(post: Post) {
        const body = this.buildCreateBody(post);
        this.http.post(this.REQUEST_URL, body);
        this.getPosts();
    }

    private buildCreateBody(post: Post) {
        const comments = this.getPostComments(post.comments);
        const body = {
            "title": post.title,
            "link": post.link,
            "date": post.date,
            "votes": post.votes,
            "description": post.description,
            "_author": post._author,
            "comments": comments
        };

        return body;
    }

    private getPostComments(comments: Comment[]) {
        let commentsIds = [];
        comments.forEach((comment) => {
            commentsIds.push(comment._id);
        });

        return commentsIds;
    }

    public findPost(title: String): Post {
        let user;

        if (this.posts && this.posts.length > 0) {
            user = this.posts.find((u) => u.title == title);
        }

        return user;
    }

    public findPostById(id: any): Post {
        let user;

        if (this.posts && this.posts.length > 0) {
            user = this.posts.find((u) => u._id == id);
        }

        return user;
    }
}