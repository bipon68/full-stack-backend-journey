const { randomInt, generatePerson, countCharacters } = require('./services');

const controller = {};

controller.randomInt = (req, res) => {
    const { start, end } = req.query;
    const getNumber = randomInt(start, end);
    res.json({ number: getNumber });
};

controller.generatePerson = (req, res) => {
    const properties = req.query;
    const person = generatePerson(properties);
    res.json({ person });
};

controller.countCharacters = (req, res) => {
    const { string } = req.query;
    const result = countCharacters(string);
    res.json({ result });
};



module.exports = controller;