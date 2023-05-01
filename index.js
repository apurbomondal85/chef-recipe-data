const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const chefData = require('./chef-server-data.json')

app.use(cors())
app.get('/', (req, res) => {
    res.send('Chef Recipe data is running')
})
app.get('/chef-recipe', (req, res) => {
    res.send(chefData)
})
app.get('/chef-recipe/:id', (req, res) => {
    const id = req.params.id;
    const item = chefData?.find(pd => pd.id === id)
    res.send(item)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})