import firebase from 'firebase';
import SaveData from '../../storage/SaveData';
import Firebase from '../../firebase/Firebase';

export default class CreateUserTaskFactory {
    public static create(email: string, password: string) {
        return new CreateUserTask(email, password);
    }
}

export class CreateUserTask {
    constructor(private readonly email: string, private readonly password: string) {}

    public execute() {
        Firebase.getInstance()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(async user => {
                if (!user) return;

                await firebase
                    .firestore()
                    .collection('users')
                    .doc(user.user?.uid)
                    .set({ name: '', profile: '' });

                const KEY_USER_ID = 'userId';

                //ローカルストレージに値を保存
                SaveData.save(KEY_USER_ID, user.user?.uid);
            })
            .catch(error => console.log(error));
    }
}
