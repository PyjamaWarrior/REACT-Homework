export default class UserService {
    url = 'https://jsonplaceholder.typicode.com/users';

    async getAllUsers() {
        return await fetch(this.url).then(response => response.json())
    }
}