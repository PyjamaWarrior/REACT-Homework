export class PostService {
    url = 'https://jsonplaceholder.typicode.com/posts';

    getAllPosts() {
        return fetch(this.url)
            .then(response => response.json())
            .then(value => value)
    }

    findPostById(posts=[], id) {
        return posts.find(value => value.id === id)
    }
}