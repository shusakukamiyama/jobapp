import Firebase from '../../firebase/Firebase';

export default class CreatePostTaskFactory {
    public static create(title: string, content: string) {
        return new CreatePostTask(title, content);
    }
}

export class CreatePostTask {
    constructor(private readonly title: string, private readonly content: string) {}

    public execute() {
        Firebase.getInstance().save('posts', {
            title: this.title,
            content: this.content
        });
    }
}
