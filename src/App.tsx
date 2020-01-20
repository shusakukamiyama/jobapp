import React from 'react';
import './App.css';
import { appInitilize } from './lib/firebase/initialize/AppInitialize';
import TopRouter from './container/router/TopRouter';

type State = {
    isInitialized: boolean;
};

export default class App extends React.Component<{}, State> {
    public constructor(props: {}, state: State) {
        super(props, state);
        this.state = {
            isInitialized: false
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
    }

    public render() {
        if (!this.state.isInitialized) return null;

        return <TopRouter />;
    }
}
