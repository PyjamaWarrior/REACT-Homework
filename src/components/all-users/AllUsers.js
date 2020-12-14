import React, {Component} from 'react';
import UserService from "../../services/UserService";
import User from "../user/User";
import UserDetails from "../user-details/UserDetails";
import {Route, withRouter} from "react-router-dom";

class AllUsers extends Component {
    userService = new UserService();
    state = {users: []};

    async componentDidMount() {
        const users = await this.userService.getAllUsers();
        this.setState({users});
    }

    render() {
        const {users} = this.state;
        const {match: {url}} = this.props;

        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
                <hr/>
                <Route path={url + '/:id'} render={(props) => {
                    const {match: {params: {id}}} = props;
                    return <UserDetails {...props} key={id}/>
                }}/>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllUsers);