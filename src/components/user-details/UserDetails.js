import React, {Component} from 'react';
import UserService from "../../services/UserService";

class UserDetails extends Component {
    userService = new UserService();
    state = {user: null};

    async componentDidMount() {
        const {match: {params: {id}}} = this.props;
        const user = await this.userService.getUser(id);
        this.setState({user})
    }

    render() {
        const {user} = this.state;

        return (
            <div>
                {user && <div>{user.id}-{user.name}; Username: {user.username}; Email: {user.email};</div>}
            </div>
        );
    }
}

export default UserDetails;