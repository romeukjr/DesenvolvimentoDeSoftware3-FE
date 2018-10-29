import { Post } from "./Post";
import { User } from "./User";

export class Comment {
    _id: any;
    post: Post;
    author: User;
    text: string;
    description: string;
    date: Date;

    constructor(post: Post, author: User, text: string, description: string, date: Date){ 
        this.post = post;
        this.author = author;
        this.text = text;
        this.description = description;
        this.date = date;
    }

    public getId(): any {
        return this._id;
    }
}
