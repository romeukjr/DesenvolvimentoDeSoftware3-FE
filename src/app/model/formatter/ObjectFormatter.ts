import { Post } from "../entity/Post";

export class ObjectFormatter {
    public static postFromJson(json: JSON): Post {
        let post: Post;

        if (json) {
            post = new Post(
                json["title"],
                json["description"],
                "",
                json["date"],
                json["comments"],
                json["votes"]
            );
        }

        return post;
    }
}