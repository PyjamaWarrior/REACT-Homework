import React, {Component} from 'react';
import UserService from "../../services/UserService";
import User from "../user/User";

class AllUsers extends Component {
    userService = new UserService();
    state = {users: []};

    async componentDidMount() {
        const users = await this.userService.getAllUsers();
        this.setState({users})
    }

    render() {
        const {users} = this.state;

        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllUsers;