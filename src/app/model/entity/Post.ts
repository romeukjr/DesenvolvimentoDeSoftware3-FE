import { Comment } from "./Comment";
import { User } from "./User";

export class Post {
    private _id: any;
    title: string;
    description: string;
    link : string;
    votes: number;
    date: Date;
    comments: Comment[];
    _author: User;

    constructor(title: string, description: string, link?: string, date?: Date, comments?: any[], votes? : number, author?: User){
        this.title = title;
        this.link = link;
        this.date = date;
        this.votes = 0;
        this.comments = comments;
        this.description = description;
        this._author = author;
    }

    public getId(): any {
        return this._id;
    }

    public upVote(): number {
        return ++this.votes;
    }

    public downVote(): number {
        return --this.votes;
    }

    public addComment(comment: Comment) {
        this.comments.push(comment);
    }
}
