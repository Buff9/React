let baseUrl = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => {
    return fetch(baseUrl)
        .then(value => value.json())
}

const getUser = async (id) => {
    let user = await fetch (baseUrl + '/' + id)
        .then(value => value.json())
    return user;
}
const getUserPosts =  async (id) => {
    fetch(baseUrl + '/' + id + '/posts')
        .then(value => value.json())
}
export {getUsers, getUser, getUserPosts}
