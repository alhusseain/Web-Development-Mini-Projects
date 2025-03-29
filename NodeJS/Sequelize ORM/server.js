const express = require('express')
const {Sequelize,Task} = require('./models')
const TaskPoint = require('./TaskPoint')
const sequelize = require('./database')
const app = express()


const port = 8080
app.use('/Task',TaskPoint)

async function initDb(){
    await Sequelize.authenticate()
    console.log("Database Connected")
    await Sequelize.sync()
    console.log("Database Synchronized")
}

initDb()

app.get('/',(req,res)=>{
    res.send("Welcome to our API")
})

var server = app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`)
})

process.on('SIGINT',async ()=>{
    await server.close(async ()=>{
    console.log("Server is closed")
    await sequelize.close();
    console.log('Database connection closed.');
    })
}
)

