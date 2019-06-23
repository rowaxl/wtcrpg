import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

export default ({ children, initialState = {
  messages: [{id:1, user:{name:'John', icon:''}, text:'Text01', created:1561037055981},
  {id:2, user:{name:'Wren', icon:''}, text:'Text02', created:1561037075981},
  {id:3, user:{name:'Root', icon:''}, text:'Text03', created:1561037255981},
  {id:4, user:{name:'Show', icon:''}, text:'Text04', created:1561038055981}],
  channel: { name: 'Library' }
} }) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(reduxPromise)
        )
      );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};