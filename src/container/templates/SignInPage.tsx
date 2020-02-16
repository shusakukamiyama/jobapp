import React from 'react';
import { SignIn } from '../../component/SignIn';

type State = {
    email: string;
    password: string;
};

export default class SignInPage extends React.Component<{}, State> {
    public constructor(props: any, state: State) {
        super(props, state);
        this.state = {
            email: '',
            password: ''
        };
    }

    private handleEmail = (email: string) => {
        this.setState({ email })
    }

    private handlePassword = (password: string) => {
        this.setState({ password })
    }

    public render() {
        const { email, password } = this.state;
        return (
            <SignIn email={email} password={password} onChangeEmail={this.handleEmail} onChangePassword={this.handlePassword} />
        )
    }
}
