import firebase from 'firebase';
import UserFactory from '../../../define/model/user/UserFactory';
import UserData from '../../../define/model/user/User';

export default class GetUserTaskFactory {
    public static create(userId : string | null) {
        return new GetUserTask(userId);
    }
}

export class GetUserTask {
    public constructor(public readonly userId : string | null){}

    public execute() {
        if (this.userId) {
        return firebase.firestore().collection('users')
            .doc(this.userId)
            .get()
            .then((doc) => {
                if (!doc.exists) return;
                const user = UserFactory.create(doc.id, doc.data() as UserData);
                return user;
            })
        }
    }
}