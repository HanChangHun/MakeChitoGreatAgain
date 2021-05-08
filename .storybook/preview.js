import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from "../src/_reducers";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

export const decorators = [
    (Story) => (
        <Provider
            store={createStoreWithMiddleware(Reducer,
                window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
            )}>
            <Router>
                <Story/>
            </Router>
        </Provider>
    ),
];

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}