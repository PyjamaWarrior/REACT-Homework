import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={'/users'}>Users</Link>
                    <br/>
                    <Link to={'/posts'}>Posts</Link>

                    <hr/>
                    <Switch>
                        <Route path={'/users'} render={() => <AllUsers/>}/>
                        <Route path={'/posts'} render={() => <AllPosts/>}/>
                    </Switch>
                    <hr/>
                </div>
            </Router>
        );
    }
}

export default App;