import React, {Component} from 'react';

class Post extends Component {
    render() {
        const {item, onPostChose, isShowButton} = this.props;

        return (
            <div>
                <b>{item.id}-post, </b>
                <b>title:</b> {item.title}
                <br/>
                <b>body:</b> {item.body}
                {
                   !isShowButton && <button onClick={() => {onPostChose(item.id)}}>chose me</button>
                }
            </div>
        );
    }
}

export default Post;