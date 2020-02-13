import firebase from 'firebase';
import PostFactory from '../../../define/model/post/PostFactory';
import Post, { PostData } from '../../../define/model/post/Post';

export default class GetPostTaskFactory {
    public static create(postId: string) {
        return new GetPostTask(postId);
    }
}

export class GetPostTask {
    public constructor (public readonly postId: string){};

    public async execute(): Promise<Post> {
        const db = firebase.firestore();
        try {
            const row = await db.collection('posts')
                .doc(this.postId)
                .get();
            const post = PostFactory.create(row.id, (row.data() as PostData));
            return post;
        }
        catch (err) {
            return err;
        }
    }
}