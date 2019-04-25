//Backend
require("dotenv").config();
const massive= require ("massive");
const express = require ("express");
const app = express();
const auth_controller = require("./controllers/auth_controller");
const SERVER_PORT=5050;
const session = require ('express-session');

const {CONNECTION_STRING, SESSION_SECRET }= process.env



//dbInstance is a JS variable
massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set("db", dbInstance );
        console.log("Database connected");
    })
    .catch(err => 
        console.log(err));

//app.use gets put after massive
app.use(express.json());

app.use(
    session({secret: SESSION_SECRET , resave: false, saveUninitialezed: true, cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    } })
);

//app.post because you're trying to add to the db
//this info should be held in req.body
app.post("/auth/signup", auth_controller.signup)
//going to create the signup function but havent created it yet

app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}` ))