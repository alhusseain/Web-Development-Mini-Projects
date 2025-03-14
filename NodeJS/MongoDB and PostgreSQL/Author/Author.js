const express = require("express")
const Authordb = require('./Repository')
const router = express.Router()

Authordb.create()

router.get('/:id',async (req,res)=>{
    let result = await Authordb.get(req.params.id);
    result = result[0]
    res.send(
       `
       Id: ${result.author_id}
       Name: ${result.first_name} ${result.last_name}

        `
    )
})

router.post('/insert/:id/:firstName/:lastName',async (req,res)=>{
    try{
    await Authordb.add(req.params.id,req.params.firstName,req.params.lastName)
    res.send("Inserted Successfully")
    }
    catch (err){

        res.send(err.detail)

    }
})

router.put('/update/:id/:firstName/:lastName',async (req,res)=>{
    await Authordb.update(req.params.id,req.params.firstName,req.params.lastName)
    res.send("Updated Successfully!")
})


router.delete('/delete/:id',async (res,req)=>{
    await Authordb.del(req.params.id)
    res.send("Deleted Successfully!")
})

module.exports = router