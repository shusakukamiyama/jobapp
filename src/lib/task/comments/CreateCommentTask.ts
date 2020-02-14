import Firebase from '../../firebase/Firebase';

export default class CreateCommentTaskFactory {
    public static create(content: string, targetId: string | null) {
        return new CreateCommentTask(content, targetId);
    }
}

export class CreateCommentTask {
    constructor(private readonly content: string, private readonly targetId: string | null) {}

    public execute() {
        Firebase.getInstance().save('comments', {
            content: this.content,
            targetId: this.targetId,
            createdAt: Math.floor(new Date().getTime() / 1000)
        });
    }
}
