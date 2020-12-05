import React, {Component} from 'react';
import Post from "../post/Post";
import {PostService} from "../../services/PostService";

class AllPosts extends Component {

    postService = new PostService();

    state = {posts: [], chosenOne: null};

    componentDidMount() {
        this.postService.getAllPosts().then(value => this.setState({posts: value}))
    }

    onUserChose = (id) => this.setState({chosenOne: this.postService.findPostById(this.state.posts, id)})

    render() {
        let {posts, chosenOne} = this.state;

        return (
            <div>
                {
                    posts.map(value => <Post item={value} onUserChose={this.onUserChose} key={value.id}/>)
                }
                <hr/>
                {
                    chosenOne && <Post item={chosenOne} isShowButton={true}/>
                }
            </div>
        );
    }
}

export default AllPosts;