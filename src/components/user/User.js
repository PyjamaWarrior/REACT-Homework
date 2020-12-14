import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class User extends Component {
    render() {
        const {match: {url},item} = this.props;

        return (
            <div>
                {item.id}-{item.name} - <Link to={url + '/' + item.id}>user details</Link>
            </div>
        );
    }
}

export default withRouter(User);