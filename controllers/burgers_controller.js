// ==================================================================================================
// Routing
// ==================================================================================================
// must require express
let express = require("express");
let router = express.Router();
let connection = require("../config/connection");



//must import path
//let burger = require("../models/burger.js");

// Creates ROUTES to request, send, update, and delete
router.get("/", function(req, res) {

    let queryString = "SELECT * FROM t_burger";
    console.log(data);
    connection.query(queryString , function(err, data){
        res.send(data);
        

    });

});
//post route - add click event for view to tell controller url
//the controller will connect to the model and the model will handle the database writing (activity 16 cat example)
//delete route

module.exports = router;