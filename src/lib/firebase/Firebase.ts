// firebaseのサーバー管理
import firebase from 'firebase';

require('firebase/firestore');

export default class Firebase {
    private db: firebase.firestore.Firestore | null;

    private constructor() {
        this.db = firebase.firestore();
    }
}