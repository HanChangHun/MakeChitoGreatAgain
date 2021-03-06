import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Auth from './hoc/auth'
import StartPage from "./components/5.pages/StartPage/StartPage";
import MainPage from "./components/5.pages/MainPage/MainPage";
import MidtermPage from "./components/5.pages/MidtermPage/MidtermPage";
import FinalPage from "./components/5.pages/FinalPage/FinalPage";
import AdminPage from "./components/5.pages/AdminPage/AdminPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Auth(StartPage, 0)}/>
                <Route exact path="/main" component={Auth(MainPage, 1)}/>
                <Route exact path="/midterm" component={Auth(MidtermPage, 1)}/>
                <Route exact path="/final" component={Auth(FinalPage, 1)}/>
                <Route exact path="/admin" component={Auth(AdminPage, null, true)}/>
            </Switch>
        </Router>
    );
}

export default App;
