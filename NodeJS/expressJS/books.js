const express = require('express')
const router = express.Router()


var books=[{
    'Title':'Chronicles of Narnia',
    'Author': 'Donut rememba',
    'ISBN':'219840'
},{
    'Title':'Sherlock Holmes vol.1',
    'Author':'Sir Arthur Conan Doyle',
    'ISBN':'12874692'
}
]

router.get('/',(req,res)=>{
    res.send(books)
})

router.get('/id/:id',(req,res)=>{
    res.send(books[req.params.id])
})

router.post('/add/:title/:author/:isbn',(req,res)=>{
    books.push({'Title':req.params.title,
        'Author':req.params.author,
        'ISBN':req.params.isbn
    })

    res.send("Added Successfuly!")

})

router.post('/remove/:id',(req,res)=>{
    console.log("here");
    books.splice(req.params.id,1)
    res.send("Removed Successfuly!")
})

router.post('/update/:id/:title/:author/:isbn',(req,res)=>{
    books[req.params.id]={
        'Title':req.params.title,
        'Author': req.params.author,
        'ISBN': req.params.isbn
    }
    res.send("Updated Successfuly!")
})



module.exports = router