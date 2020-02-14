// firebaseのサーバー管理
import firebase from 'firebase';

require('firebase/firestore');

export default class Firebase {
    private static instance: Firebase;

    private db: firebase.firestore.Firestore;

    private auth: firebase.auth.Auth;

    private constructor() {
        this.db = firebase.firestore();
        this.auth = firebase.auth();
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new Firebase();
        }
        return this.instance;
    }

    public load(collection: string) {
        return this.db.collection(collection);
    }

    public save(collection: string, data: firebase.firestore.DocumentData) {
        return this.db.collection(collection).add(data);
    }

    public createUserWithEmailAndPassword(email: string, password: string) {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }
}
