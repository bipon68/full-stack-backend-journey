const express = require('express')
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDoc = YAML.load('./swagger.yaml')

//express app
const app = express()
app.use(express.json())
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

app.get('/health', (_req, res) => {
    res.status(200).json({
        health: 'Ok'
    })
})
app.get('/api/v1/articles', (req, res) => {
    console.log('URL', req.url)
    console.log('Query params', req.query)

    res.status(200).json({message: 'Hellow Swagger'})
})

app.listen(4000, ()=> {
    console.log('Server is listening on port 4000')
} )