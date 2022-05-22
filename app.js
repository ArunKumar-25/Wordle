import express from 'express'
const app = express()
import fs from 'fs'
app.get('/', (req, res) => {
    fs.createReadStream('index.html').pipe(res)
})
app.use(express.static('src'))
const port = 80

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})