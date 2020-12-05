import React, {Component} from 'react';

class Post extends Component {
    render() {
        const {item, onUserChose, isShowButton} = this.props;

        return (
            <div>
                <b>{item.id}-post</b>
                <b>title:</b> {item.title}
                <br/>
                <b>body:</b> {item.body}
                {
                    !isShowButton &&  <button onClick={() => onUserChose(item.id)}>chose me</button>
                }
            </div>
        );
    }
}

export default Post;