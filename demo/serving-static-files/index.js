const express = require('express')
const path = require('path')

const app = express()
const port = 3000

// hosting a static server
app.use(express.static(path.join(__dirname, 'public')))
// http://localhost:3000/images/demo.png
// http://localhost:3000/css/index.css
// http://localhost:3000/js/index.js
// http://localhost:3000/index.html


// add prefix
app.use('/static', express.static(path.join(__dirname, 'public')))
// http://localhost:3000/static/images/demo.png
// http://localhost:3000/static/css/index.css
// http://localhost:3000/static/js/index.js
// http://localhost:3000/static/index.html

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
