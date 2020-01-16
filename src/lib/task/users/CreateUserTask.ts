import firebase from 'firebase';

export default class CreateUserTaskFactory {
    public static create(email: string, password: string) {
        return new CreateUserTask(email, password);
    }
}

export class CreateUserTask {
    constructor(private readonly email: string, private readonly password: string) {}

    public execute() {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .catch(error => console.log(error));
    }
}
