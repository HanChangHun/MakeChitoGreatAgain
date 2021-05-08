import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import StartPage from "./components/5.pages/StartPage/StartPage";
import MainPage from "./components/5.pages/MainPage/MainPage";


function App() {
    return (
        <Router>
            <div className={"body"}>
                <Switch>
                    <Route exact path="/" component={withRouter(StartPage)}/>
                    <Route exact path="/main" component={withRouter(MainPage)}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
