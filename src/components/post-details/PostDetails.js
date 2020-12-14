import React, {Component} from 'react';
import PostService from "../../services/PostService";

class PostDetails extends Component {
    postService = new PostService();
    state = {post: null};

    async componentDidMount() {
        const {match: {params: {id}}} = this.props;
        const post = await this.postService.getPost(id);
        this.setState({post})
    }

    render() {
        const {post} = this.state;

        return (
            <div>
                {
                    post &&
                    <div>Post Id: {post.id}; User Id: {post.userId}
                        <br/> Post Title: {post.title};
                        <br/>Post body: {post.body};</div>
                }
            </div>
        );
    }
}

export default PostDetails;