const express = require('express')
const app = express()
const port = 8080

const Author = require('./Author/Author.js')
const Blog = require('./Blog/Blog.js')

app.use('/Author',Author)
app.use('/Blog',Blog)

app.get('/',(req,res)=>{
    res.send("Welcome to our API")
})

app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`)
})