import React, {Component} from 'react';
import PostService from "../../services/PostService";
import Post from "../post/Post";

class AllPosts extends Component {
    postService = new PostService();
    state = {posts: []};

    async componentDidMount() {
        const posts = await this.postService.getAllPosts();
        this.setState({posts})
    }

    render() {
        const {posts} = this.state;

        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllPosts;