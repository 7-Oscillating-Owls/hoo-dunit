const express = require('express')
const app = express()
const path = require('path')
const port = 8500


//app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(path.join(__dirname + '/../client/dist')));


// app.get('/', (req, res) => {
//   res.send('hello')

// })
app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})