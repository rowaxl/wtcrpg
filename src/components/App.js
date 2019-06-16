import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Toolbar from './templates/Toolbar';
import SigninPage from './pages/SigninPage';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Toolbar />
                <Route exact path="/" component={SigninPage} />
            </BrowserRouter>
        );
    }
}