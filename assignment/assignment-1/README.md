# Assignment 1

### Project Creation Step by Step
- npm init -y
- nodemon: `npm i -D nodemon`
- @faker-js/faker - `npm i @faker-js/faker`
- run project: `npm run dev`

**package.json file**

```node
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
```

**Reference**
- [JSDoc](https://jsdoc.app/)
- [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)
- [randomuser](https://randomuser.me/)

#### API Endpoints
- `api/randomInt?start=1&end=5`
- `api/generatePerson?properties=firstName&lastName&email`
- `api/countCharacters?string=68com085@#$`

**Requirment - Assignment 1**

- Start Date: 11/05/2023
- Due Date: 12/05/2023
- Subject: Make our algorithm live using REST API
- Description: Please select one or many algorithm ideas from the below list and create a rest api out of it -
- We have a function that can take two arguments called start and end. Both arguments will be a valid integer number. The function will return a random value in the given range.
- We have a function that can generate a fake person profile including first name, last name, email, avatar, age and address. User can pass an array of selected properties and it will return a person object containing only given properties. Ex: generatePerson([’firstName’, ‘lastName’, ‘email’])
- We have a function that can accept a string as an argument and return an object containing the number of letters, number of symbols and number of numeric characters.

Notes: **You must have to keep business logic and API logic separate.**

