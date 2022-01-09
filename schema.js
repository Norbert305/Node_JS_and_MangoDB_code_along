//This is a NodeJS and MangoDB code allong project with https://www.youtube.com/watch?v=fgTGADljAeg&t=168s
//Do not test to see if this works or not. 





const mangoose = require('mangoose')// needed to require mangoose from library???

const subscriberSchema = new mangoose.Schema({

        name: {
            type: String,
            required: true
        },
        subscribeToCHannel: {
            type: String,
            required: true
        },
        subscribeDate: {
            type: Date,
            required: true,
            default: Date.now
        }
})

module.expots = mangoose.model('Subscriber', subscriberSchema)