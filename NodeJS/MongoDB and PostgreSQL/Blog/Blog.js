const express = require('express')
const router = express.Router()
const Blogdb = require('./Repository.js')
const Authordb = require('../Author/Repository.js')


router.post('/insert/:id/:title/:body/:author_id',async (req,res)=>{
    try{
        await Blogdb.insertOne({BlogId:req.params.id,
            title:req.params.title,
            body:req.params.body,
            author_id:req.params.author_id})
        res.send("Added successfully!")
    }
    catch(err){
        res.send("error")
    }
}
)

router.get('/:id',async(req,res)=>{

    try{
        let result= await Blogdb.findOne({BlogId:req.params.id})
        let author_info = await Authordb.get(result.author_id);
        author_info = author_info[0];
        console.log(author_info)
        console.log(result)
        res.send(`
            Title: ${result.title}
            body: ${result.body}
            Author: ${author_info.first_name} ${author_info.last_name}
            
            `)
    }
    catch(err)
    {
        res.send("error")
    }

}
)

router.put('/update/:id/:title/:body/:author_id',async (req,res)=>{
    try{
        await Blogdb.updateOne({BlogId:req.params.id},{$set:{title:req.params.title,
            body:req.params.body,
            author_id:req.params.author_id}}
        )
        res.send("Updated successfully!")
    }
    catch(err){
        res.send("error")
    }
}
)

router.delete('/delete/:id',async(req,res)=>{
    try{
        await Blogdb.deleteOne({BlogId:req.params.id})
        res.send("Deleted Successfully")
    }
    catch(err){res.send("Error")}

})

module.exports = router