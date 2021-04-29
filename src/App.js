import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {loginPage2} from "./components/pages/LoginPage/LoginPage.stories"

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login2" component={loginPage2}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
