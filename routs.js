//This is a NodeJS and MangoDB code allong project with https://www.youtube.com/watch?v=fgTGADljAeg&t=168s
//Do not test to see if this works or not. 


const express = require('express')//used to require express

const router = express.Router() //needed to run express

const Subscriber = require('../modules/subscriber') //will pull subscriber created from module schema.js

//Getting All
router.get('/', async (req, res)=>{
//res.send('Hello World')------> used to test if it works on postman
    try {
    const subscribers = await Subscriber.find() //----->sending all subscribers to the use. 
    res.json(subscribers)
    } 
    catch(err) {
        res.status(500).json({meaasage: err.meaasage}) //status 500 means the error is from our end. 
    }
})
//Getting one
router.get('/:id', (req, res)=>{
    res.send(req.params.id)
})
//Post One
router.post('/', (req, res)=>{
    const subscriber = new Subscriber({
        name : req.body.name,
        subscribedToChannel:
        req.body.subscribedToChannel
    })
    try {
    const newSubscriber = await subscriber.save()
    res.status(201).json(newSubscriber)
    }
    catch (err) {
        res.status(400).json({message: err.message}) //400 means something wrong with the user input and not our server. 
    }
})
//Put One
router.put('/', (req, res)=>{
        if (req.body.name !== null) {
            res.subscriber.name = req.body.name
        }
        if (req.body.subscribedToChannel !== null) {
            res.subscriber.subscribedToChannel = req.body.subscribedToChannel
        }
        try {
            const UpdateSubscriber = await res.subscriber.save()
            res.json(UpdateSubscriber)
        }
        catch (err)  {
                res.status(400).json({meaasage: err.message})
        }
})
//Delete One
router.delete('/:id', (req, res)=>{
        try {
            await res.subscriber.remove()
            res.json({message: 'Deleted Subscriber'})
        }
        catch (err) {
                res.status(500).json({message: err.message})
        }
})


module.exports = router //prevent any errors. 