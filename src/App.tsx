import React from 'react';
import './App.css';
import { appInitilize } from './lib/firebase/initialize/AppInitialize';
import SaveData from './lib/storage/SaveData';
import { TopRouter } from './container/router/TopRouter';
import { BrowserRouter } from 'react-router-dom';

type State = {
    isInitialized: boolean;
    userId?: string | null;
};

export default class App extends React.Component<{}, State> {
    public constructor(props: {}, state: State) {
        super(props, state);
        this.state = {
            isInitialized: false,
            userId: null
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

        //ローカルストレージに値を保存
        SaveData.save(KEY_USER_ID, 'ttt');

        //ローカルストレージから値を取得
        const userId = SaveData.load(KEY_USER_ID);
        this.setState({ userId: userId })
    }

    public render() {
        const { userId } = this.state;
        if (!this.state.isInitialized) return null;

        return <BrowserRouter><TopRouter userId={userId}/></BrowserRouter>;
    }
}
