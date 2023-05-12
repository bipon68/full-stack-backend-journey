const express = require('express');
const router = require('./src/routes');

const app = express();

app.use(express.json());
app.use('/api',router);

app.get('/', (req, res) => {
    res.send('Hello Man!');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is listening on PORT ${port}`);
    console.log(`localhost:${port}`)
});