import React from 'react';
import {BaseLayout} from "./layouts";
import {Home, MovieDetails} from "./pages";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import "./App.css";

function App() {
    const history = useHistory();

    return (
        <BaseLayout>
            <Switch>
                <Route exact path="/" render={() => {
                    return <Home/>
                }}/>
                <Route path="/movie/:id" render={() => {
                    return <MovieDetails/>
                }}/>
                <Route render={() => {
                    return (
                        <div className="page-not-found">
                            <h1>PAGE NOT FOUND</h1>
                            <button onClick={() => history.push('/')}>Return to home page</button>
                        </div>
                    )
                }}/>
            </Switch>
        </BaseLayout>
    )
}

export default App;