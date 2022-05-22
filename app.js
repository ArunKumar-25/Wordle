import express from 'express'
const app = express()
const port = 3000
import fs from 'fs'
app.get('/', (req, res) => {
    fs.createReadStream('index.html').pipe(res)
})
app.use(express.static('src'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})