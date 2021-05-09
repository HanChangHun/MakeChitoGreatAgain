import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import StartPage from "./components/5.pages/StartPage/StartPage";
import MainPage from "./components/5.pages/MainPage/MainPage";
import Auth from './hoc/auth'

function App() {
    return (
        <Router>
            <div className={"body"}>
                <Switch>
                    <Route exact path="/" component={Auth(StartPage, null)}/>
                    <Route exact path="/main" component={Auth(MainPage, null)}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
