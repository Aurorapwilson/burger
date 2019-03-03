// ==================================================================================================
// Routing
// ==================================================================================================
// must require express
let express = require("express");
let router = express.Router();
let connection = require("../config/connection");
//imported path
let burger = require("../models/burger.js");





// Creates ROUTES to request, send, update, and delete
router.get("/", function (req, res) {

    let queryString = "SELECT * FROM t_burger";
    connection.query(queryString, function (err, data) {
        res.send(data);
        console.log(data);


    });
    //create handlebars object to get 
    burger.all(function (data) {
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//post route - click event changes burger object to devoured
//the controller will connect to the model and the model will handle the database writing (activity 16 cat example)
router.post("/api/burger", function(req, res) {
    burger.create([
      "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  //put route 
  router.put("/api/burger/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    cat.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  //delete route
  router.delete("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });





module.exports = router;