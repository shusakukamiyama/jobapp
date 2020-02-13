import firebase from 'firebase';
import CommentFactory from '../../../define/model/comment/CommentFactory';
import Comment, { CommentData } from '../../../define/model/comment/Comment';

export default class GetCommentsTaskFactory {
    public static create(targetId: string | null) {
        return new GetCommentsTask(targetId);
    }
}

export class GetCommentsTask {
    public constructor(private readonly targetId: string | null){}

    public async execute(): Promise<Comment[]> {
        const db = firebase.firestore();
        try {
            const snapshot = await db.collection('comments')
                .where('targetId', '==', this.targetId)
                .get();
            const comments: Comment[] = [];
            snapshot.forEach(row => {
                const comment = CommentFactory.create(row.id, (row.data() as CommentData));
                comments.push(comment);
            });
            return comments;
        }
        catch (err) {
            return err;
        }
    }
}
