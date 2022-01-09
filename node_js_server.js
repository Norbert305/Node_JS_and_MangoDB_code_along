
//This is a NodeJS and MangoDB code allong project with https://www.youtube.com/watch?v=fgTGADljAeg&t=168s
//Do not test to see if this works or not. 

require('dotenv').config() // Basically calling from our dotenv library.  Also, this is our .env file setup for our url server. Note that .env means enviroment variable. 
//.config() helps load all our enviroment variables from our .env


const express = require('express')
//method used to require express which pulls in the express library

const app = express()
//configure our server

const mangoose = require('mangoose')
//require library of mangoose


mangoose.connect('mangoodb://localhost/subscribers', {useNewURLParser: true})// {useNewURLParser: true} was recommended by the command line to use to resolve future issues. 
//connect to our databse with subcribers as our DataBase name of choice


const db = mangoose.connection //run events that out DataBase is connected to. 

db.on('error', (error)=> console.error(error)) //events we can run that our DataBase is connected to so that we know it's working correctly. 
db.once('open', ()=> console.log('connected to DataBase')) //db.once = clarifys that this event will only run once. Only when Database opens. 

app.use(express.json()) //allows server to except json. 

const subscribersRouter = require('./routs/subscribers')

app.use('/subscribers', subscribersRouter) //sets up our routs


app.listen(3000, ()=> console.log('server started'))
//for our server. Port is 3000

//use commands npm run start to start server. 