const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello courses!')
})

app.listen(port, () => {
    console.log(`cse courses coming soon!! ${port}`)
})