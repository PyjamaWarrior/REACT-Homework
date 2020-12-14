import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllPosts from "./components/all-posts/AllPosts";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={'/users'}>Show All Users</Link>
                    <br/>
                    <Link to={'/posts'}>Show All Posts</Link>
                </div>

                <hr/>
                <Switch>
                    <Route path={'/users'} render={() => {
                        return <AllUsers/>
                    }}/>
                    <Route path={'/posts'} render={() => {
                        return <AllPosts/>
                    }}/>
                </Switch>
                <hr/>
            </Router>
        );
    }
}

export default App;