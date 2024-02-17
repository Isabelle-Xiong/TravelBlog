//express js stuff stored in api, react app stored in client
//must sudo npm install -g nodemon and run nodemon index.js to run file. Don't use node index.js or it won't update automatically

// sets up a basic Express.js server
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
//This app object represents your Express application and allows you to define routes, middleware, and handle HTTP requests and responses.
const app = express();
const User = require('./models/user');
//installed yarn add bcryptjs from https://yarnpkg.com/ to encrypt password
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


//cors() is a middleware package for Express.js that enables Cross-Origin Resource Sharing (CORS) in the application. CORS is a mechanism that allows resources on a web page to be requested from another domain outside the domain from which the resource originated.
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://digishegg:1qab2zzgoHiTEnx7@cluster0.sruqnl6.mongodb.net/?retryWrites=true&w=majority');

//when app gets post request to register, with req as input and res as output, it will send json object file res to register
//.post is method in Express
app.post('/register', async (req, res) => {
    /// Extract the 'username' and 'password' fields from the request body sent by the client.
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
        });
        // Call the 'requestData' function with the extracted 'username' and 'password' as arguments.
        // The 'requestData' function is assumed to be defined elsewhere in the code.
        // It could be a custom function that processes the username and password data in some way.
        res.json(userDoc);
    } catch (e) {
        console.log(e);
        //e as parameter will just output the error 
        res.status(400).json(e);
    }



});

//This line tells your Express application to start listening for incoming HTTP requests on port 4000.
app.listen(4000);

//mongodb+srv://digishegg:1qab2zzgoHiTEnx7@cluster0.sruqnl6.mongodb.net/?retryWrites=true&w=majority