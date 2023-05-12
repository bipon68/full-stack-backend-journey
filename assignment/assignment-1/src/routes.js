const router = require('express').Router();
const { randomInt, generatePerson, countCharacters  } = require('./controller');

router.get('/randomInt', randomInt);
router.get('/generatePerson', generatePerson);
router.get('/countCharacters', countCharacters);


module.exports = router;