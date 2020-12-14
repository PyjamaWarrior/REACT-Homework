import React, {Component} from 'react';
import PostService from "../../services/PostService";
import Post from "../post/Post";
import PostDetails from "../post-details/PostDetails";
import {Route, withRouter} from "react-router-dom";

class AllPosts extends Component {
    postService = new PostService();
    state = {posts: []};

    async componentDidMount() {
        const posts = await this.postService.getAllPosts();
        this.setState({posts});
    }

    render() {
        const {posts} = this.state;
        const {match: {url}} = this.props;

        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
                <hr/>
                <Route path={url + '/:id'} render={(props) => {
                    const {match: {params: {id}}} = props;
                    return <PostDetails {...props} key={id}/>
                }}/>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllPosts);