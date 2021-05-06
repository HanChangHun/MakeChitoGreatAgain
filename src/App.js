import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {StartPage} from "./components/5.pages/StartPage/StartPage";
import {LoginForm} from "./components/2.molecules/LoginForm/LoginForm";
import {MainPage} from "./components/5.pages/MainPage/MainPage";
import {SignupForm} from "./components/2.molecules/SignupForm/SignupForm";


function App() {
    return (
        <Router>
            <div className={"body"}>
                <Switch>
                    <Route exact path="/start" component={StartPage}/>
                    <Route exact path="/main" component={MainPage}/>
                    <Route exact path="/login" component={LoginForm}/>
                    <Route exact path="/" component={SignupForm}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
