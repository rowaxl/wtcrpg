import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'components/App';
import Root from 'Root';

ReactDOM.render(
<Root>
  <BrowserRouter>
    <Route path='/' component={App}></Route>
  </BrowserRouter>
</Root>,
document.getElementById('root'));