import firebase from 'firebase';
import PostFactory from '../../../define/model/post/PostFactory';
import Post, { PostData } from '../../../define/model/post/Post';

export default class GetPostsTaskFactory {
    public static create() {
        return new GetPostsTask();
    }
}

export class GetPostsTask {
    public execute(): Promise<Post[]> {
        const db = firebase.firestore();
        return db.collection('posts')
            .get()
            .then(snapshot => {
                const posts: Post[] = [];
                snapshot.forEach(row => {
                    const post = PostFactory.create(row.id, row.data() as PostData);
                    posts.push(post);
                });
                return posts;
            })
            .catch(err => {
                return err
            });
    }
}
