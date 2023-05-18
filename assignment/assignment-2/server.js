const express = require('express');
const middleware = require('./middleware/middleware');
const  router  = require('./routes/globalRoutes');

// const dotenv = require('dotenv');
// dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(middleware)
app.use("/api/v1", router)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})