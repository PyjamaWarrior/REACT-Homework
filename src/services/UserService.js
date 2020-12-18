export default class UserService {
    url = 'https://jsonplaceholder.typicode.com/users';

    getAllUsers() {
        return fetch(this.url).then(response => response.json()).then(value => value)
    }

    findUser(users, id) {
        return users.find(value => value.id === +id)
    }
}