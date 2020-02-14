import React from 'react';
import './App.css';
import { appInitilize } from './lib/firebase/initialize/AppInitialize';
import SaveData from './lib/storage/SaveData';
import { TopRouter } from './container/router/TopRouter';
import { BrowserRouter } from 'react-router-dom';
import GetUserTaskFactory from './lib/task/users/GetUserTask';
import User from './define/model/user/User';

type State = {
    isInitialized: boolean;
    user?: User | null;
};

export default class App extends React.Component<{}, State> {
    public constructor(props: {}, state: State) {
        super(props, state);
        this.state = {
            isInitialized: false,
            user: null
        };
    }

    public componentDidMount() {
        //アプリケーションの初期化
        appInitilize()
            .catch(() => {})
            .then(() =>
                this.setState({
                    isInitialized: true
                })
            );
        const KEY_USER_ID = 'userId';
        //ローカルストレージから値を取得
        const userId = SaveData.load(KEY_USER_ID);
        GetUserTaskFactory.create(userId).execute()?.then(user => {
            this.setState({ user })
        });
    }

    public render() {
        const { user } = this.state;
        if (!this.state.isInitialized) return null;

        return <BrowserRouter><TopRouter user={user}/></BrowserRouter>;
    }
}
