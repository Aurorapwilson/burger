// import mysql connect
let connection = require('../config/connection.js');

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    let arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
//Helper function converts javascript object to SQL syntax
function objToSql(ob){
    let arr = [];
   // loop through the keys and push the key/value as a string int arr 
   for (let key in ob){
       let value = ob[key];
       //check to skip hidden properties
       if (typeof value ==="string" && value.indexOf(" ") >= 0){
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
          }
          // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
          // e.g. {sleepy: true} => ["sleepy=true"]
          arr.push(key + "=" + value);
       }
   }

   //translate array of strings to a single comma-seperated string
   return arr.toString();
}
  