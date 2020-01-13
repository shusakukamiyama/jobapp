import firebase from 'firebase';

export default class CreatePostTaskFactory {
    public static create(title: string, content: string) {
        return new CreatePostTask(title, content);
    }
}

export class CreatePostTask {
    constructor(private readonly title: string, private readonly content: string) {}

    public execute() {
        const db = firebase.firestore();
        db.collection('posts').add({
            title: this.title,
            content: this.content
        });
    }
}
