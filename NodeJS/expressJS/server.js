const express = require("express")
const app = express()
const books = require("./books.js")
const port = 8080

app.use((req,res,next)=>{
    if(req.headers.authorization!="Bearer ZEWAIL") res.send("Not authorized!")
    else next()
})

app.use("/book",books)

app.get("/",(req,res)=>{res.send("welcome")})

app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`)
})