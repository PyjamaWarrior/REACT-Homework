import React, {Component} from 'react';
import ComponentWithUseState from "./components/ComponentWithUseState";
import ComponentWithUseReducer from "./components/ComponentWithUseReduce";
import('./App.css')

class App extends Component {
    render() {
        return (
            <div>
                <ComponentWithUseState/>
                {/*<ComponentWithUseReducer/>*/}
            </div>
        );
    }
}

export default App;