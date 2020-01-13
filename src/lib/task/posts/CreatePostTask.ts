import firebase from 'firebase';

export default class CreatePostTaskFactory {
    public static create() {
        return new CreatePostTask();
    }
}

export class CreatePostTask {
    public execute() {
        const db = firebase.firestore();
        db.collection('posts').add({
            title: 'aaa',
            content: 'test'
        });
    }
}
