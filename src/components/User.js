import React from "react";
import UserService from "../services/UserService";

export default function User(props) {

    const userService = new UserService();
    const {item, userId} = props;
    const user = userService.findUser(item, userId);

    return (
        <div>
            {
                user &&
                <div className={'user'}>
                    <h4>User №{user.id}</h4>
                    <p>Name: {user.name};</p>
                    <p>Username: {user.username};</p>
                    <p>Email: {user.email};</p>
                </div>
            }
        </div>
    );
}