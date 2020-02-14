import PostFactory from '../../../define/model/post/PostFactory';
import Post, { PostData } from '../../../define/model/post/Post';
import Firebase from '../../firebase/Firebase';

export default class GetPostTaskFactory {
    public static create(postId: string) {
        return new GetPostTask(postId);
    }
}

export class GetPostTask {
    public constructor (public readonly postId: string){};

    public async execute(): Promise<Post> {
        try {
            const row = await Firebase.getInstance().load('posts')
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