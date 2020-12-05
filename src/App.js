import React, {Component} from 'react';
import AllPosts from "./components/all-posts/AllPosts";
import('./App.css');

class App extends Component {
    render() {
        return (
            <div>
              <AllPosts/>
            </div>
        );
    }
}

export default App;