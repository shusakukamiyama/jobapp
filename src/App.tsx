import React from 'react';
import './App.css';
import firebase from 'firebase';
import { appInitilize } from './lib/firebase/initialize/AppInitialize';

export default class App extends React.Component<{}> {
    public componentDidMount() {
        //アプリケーションの初期化
        appInitilize();
    }
    
    public fetchPosts = () => {
        const db = firebase.firestore();
        db.collection('posts')
            .doc('GJPiU4iSqvhS6LWd3ZvS')
            .get()
            .then(doc => {
              console.log(doc.data())
            })
    };

    public render() {
        return (
            <div className='App'>
                <h1>firebase連携</h1>
                <button onClick={() => this.fetchPosts()}>データを取得</button>
            </div>
        );
    }
}
