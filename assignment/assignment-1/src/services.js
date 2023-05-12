const { faker } = require('@faker-js/faker');

const services = {};

services.randomInt = (start, end) => {
    // Generate a random number between 0 and (end - start) + 1.
  var randomInteger = Math.floor(Math.random() * (end - start + 1)) + start;

  // Return the random integer.
  return randomInteger;
};

services.generatePerson = (data) => {
    const properties = Object.keys(data)
    // Create an empty object to store the person's data.
  var person = {};

  // Loop through the properties array.
  for (var i = 0; i < properties.length; i++) {
    // Get the current property name.
    var property = properties[i];

    // Generate a random value for the property.
    switch (property) {
      case "firstName":
        person.firstName = faker.name.firstName();
        break;
      case "lastName":
        person.lastName = faker.name.lastName();
        break;
      case "email":
        person.email = faker.internet.email();
        break;
      case "avatar":
        person.avatar = faker.image.avatar();
        break;
      case "age":
        person.age = faker.random.number({min: 18, max: 100});
        break;
      case "address":
        person.address = faker.address.streetAddress();
        break;
    }
  }

  // Return the person object.
  return person;
};


services.countCharacters = (str) => {
    // create an empty object to store the counts
    let counts = {};
    // use a regular expression to match all letters in the string and get their length
    counts.letters = (str.match(/[a-zA-Z]/g) || []).length;
    // use a regular expression to match all symbols in the string and get their length
    counts.symbols = (str.match(/[^a-zA-Z0-9\s]/g) || []).length;
    // use a regular expression to match all number characters in the string and get their length
    counts.number = (str.match(/[0-9]/g) || []).length;
    // return the counts object
    return counts;
};

module.exports = services;