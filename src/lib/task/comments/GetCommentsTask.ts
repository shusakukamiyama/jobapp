import CommentFactory from '../../../define/model/comment/CommentFactory';
import Comment, { CommentData } from '../../../define/model/comment/Comment';
import Firebase from '../../firebase/Firebase';

export default class GetCommentsTaskFactory {
    public static create(targetId: string | null) {
        return new GetCommentsTask(targetId);
    }
}

export class GetCommentsTask {
    public constructor(private readonly targetId: string | null){}

    public async execute(): Promise<Comment[]> {
        try {
            const snapshot = await Firebase.getInstance().load('comments')
                .where('targetId', '==', this.targetId)
                .orderBy('createdAt', 'desc')
                .get();
            const comments: Comment[] = [];
            snapshot.forEach(row => {
                const comment = CommentFactory.create(row.id, (row.data() as CommentData));
                comments.push(comment);
            });
            return comments;
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
}
