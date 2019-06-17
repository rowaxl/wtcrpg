import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SigninPage from './pages/SigninPage';
import ChatPage from './pages/ChatPage';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={ChatPage} />
                <Route path="/signin" component={SigninPage} />
            </BrowserRouter>
        );
    }
}