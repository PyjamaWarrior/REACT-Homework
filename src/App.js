import React, {Component} from 'react';
import UserService from "./services/UserService";
import User from "./components/User";
import('./App.css');

class App extends Component {

    userService = new UserService();
    state = {users: [], inputValue: '', currentUserId: null}
    myForm = React.createRef();

    componentDidMount() {
        this.userService.getAllUsers().then(value => this.setState({users: value}))
    }

    render() {
        const {users, currentUserId} = this.state;

        return (
            <div>
                <h3>Enter user ID</h3>
                <form ref={this.myForm} onSubmit={this.setUserId}>
                    <input className={'input'} type="number" min={1} max={10} onInput={this.commitValue}
                           placeholder={'Enter the userID'} value={this.state.inputValue}/>
                    <button>Show info about user</button>
                </form>

                <User item={users} userId={currentUserId}/>
            </div>
        );
    }

    setUserId = (e) => {
        e.preventDefault();
        this.setState({currentUserId: this.state.inputValue})
    }

    commitValue = (e) => {
        this.setState({inputValue: e.target.value})
    }
}

export default App;