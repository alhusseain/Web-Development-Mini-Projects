const express = require("express")
const app = express()
const books = require("./books.js")
const port = 8080

app.use("/book",books)

app.get("/",(req,res)=>{res.send("welcome")})

app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`)
})