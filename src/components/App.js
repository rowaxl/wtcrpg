import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SigninPage from './pages/SigninPage';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={SigninPage} />
            </BrowserRouter>
        );
    }
}