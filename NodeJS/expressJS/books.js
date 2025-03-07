const express = require('express')
const router = express.Router()


var books=[{
    'Title':'Chronicles of Narnia',
    'Author': 'Donut rememba',
    'ISBN':'219840',
    'Status':'Available'
},{
    'Title':'Sherlock Holmes vol.1',
    'Author':'Sir Arthur Conan Doyle',
    'ISBN':'12874692',
    'Status':'Available'
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
        'ISBN':req.params.isbn,
        'Status':'Available'
    })

    res.send("Added Successfuly!")

})

router.post('/borrow/:id',(req,res)=>{
    if(books[req.params.id].Status!='Available')
    {
        res.send("Book already borrowed !")
    }
    else
    {
        books[req.params.id].Status='Borrowed';
        res.send("Book borrowed successfully!")
    }
})

router.post('/return/:id',(req,res)=>{
    if(books[req.params.id].Status != 'Borrowed') res.send("Book not Borrowed!")
    else {books[req.params.id].Status='Available';res.send("Book returned Successfully")}
})

router.delete('/remove/:id',(req,res)=>{
    console.log("here");
    books.splice(req.params.id,1)
    res.send("Removed Successfuly!")
})

router.patch('/update/:id/:title/:author/:isbn',(req,res)=>{
    books[req.params.id].Author=req.params.author
    books[req.params.id].Title=req.params.title
    books[req.params.id].ISBN=req.params.isbn
    res.send("Updated Successfuly!")
})



module.exports = router