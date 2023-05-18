// CJS
const { faker } = require('@faker-js/faker');
const shortid = require('shortid')

const getUserService = () => {
    let users = [];
    for(let i = 0; i < 100; i++){
        const user = {
            id: shortid.generate(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            createdAt: new Date(),
            updateAt: new Date()
        }
        users.push(user)
    }
    return users;
}