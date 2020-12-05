import React, {Component} from 'react';
import Post from "../post/Post";

class AllPosts extends Component {

    state = {posts: [], chosenOne: null};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(value => this.setState({posts: value}))
    }

    onPostChose = (id) => this.setState({chosenOne: this.state.posts.find(value => id === value.id)});

    render() {
        let {posts, chosenOne} = this.state;
        console.log(this.state)

        return (
            <div>
                {
                    posts.map(value => <Post item={value} onPostChose={this.onPostChose} key={value.id}/>)
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