const getUserService = require('./../service/getUserService');

const controller = {};

controller.usersController = (_req, res) => {
    const users = getUserService()
    res.status(200).json(users)
}

module.exports = controller;