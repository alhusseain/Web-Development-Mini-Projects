const express = require('express')
const {Sequelize,Task} = require('./models')
const router = express.Router()
router.get('/:id',async (req,res)=>{
    result = await Task.findAll({
        limit:1,
        where:{id:req.params.id}
    }
    )
    console.log(result)
    if(result.length == 0) res.send("no such thing")
    res.send(
       `
       Id: ${result[0].dataValues.id}
       Name: ${result[0].dataValues.name}
       userId: ${result[0].dataValues.userId}

        `
    )
})

router.get('/user/:id',async (req,res)=>{
    result = await Task.findAll({
        where:{userId:req.params.id}
    }
    )
    if(result.length === 0) res.send("no such thing")
    send = `` 

    for(let i=0;i<result.length;i++)
    {
        let element = result[i]
        console.log(element)
        send+=`## Task ${i+1} ##
        Id: ${element.dataValues.id}
        Name: ${element.dataValues.name}

        `
    };
    res.send(send)
})

router.post('/:id/:taskName/:userId',async (req,res)=>{
        console.log(req.params.id)
        const newTask = await Task.create({
            id:req.params.id,
            name:req.params.taskName,
            userId:req.params.userId
            }
        ).catch((err)=>{res.send(err)});
        res.send(`Task Created!: ${newTask.toJSON()}`)
    }
)

router.put('/:id/id/:cid',async (req,res)=>{
    await Task.update(
        {id: req.params.cid},
        {where: {id:req.params.id}}
    )
    res.send("Updated Successfully!")
})

router.put('/:id/name/:taskName',async (req,res)=>{
    await Task.update(
        {name: req.params.taskName},
        {where: {id:req.params.id}}
    )
    res.send("Updated Successfully!")
})

router.put('/:id/user/:userId',async (req,res)=>{
    await task.update(
        {userid: req.params.userId},
        {where: {id:req.params.id}}
    )
    res.send("updated successfully!")
})

router.put('/:id/All/:cid/:taskName/:userId',async (req,res)=>{
    await task.update(
        {userid: req.params.userId,name:req.params.taskName,id:req.params.cid},
        {where: {id:req.params.id}}
    )
    res.send("updated successfully!")
})


router.delete('/:id',async (req,res)=>{
    await Task.destroy({where:{id:req.params.id}})
    res.send("Deleted Successfully!")
})

module.exports = router