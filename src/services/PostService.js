export default class PostService {
    url = 'https://jsonplaceholder.typicode.com/posts';

    async getAllPosts() {
        return await fetch(this.url).then(response => response.json())
    }

    async getPost(id) {
        return await fetch(this.url + '/' + id).then(response => response.json())
    }
}