var db = require("../db");


module.exports = {
  messages: {
    get: function () {

    }, // a function which produces all the messages
    post: function (name, message, room) {
      console.log("inside Model message post")
      var time = Date.now();
      // db.connect();
      var queryString = "INSERT into messages " + 
      "(id, username, roomname, message, created_at) " +
      "VALUES (NULL, '" + name + "', '" +  room + "', '" + message + "', '" + time + "');";
      db.query(queryString, function(err, result) {
        if (err){
          // db.end();
          return false;
        } else {
          // db.end();
          return true;
        }
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      // db.connect();

    },
    post: function (name) {
      console.log("inside Model user post")
      console.log(name);
      // db.connect();
      var queryString= "INSERT into users (id, username) VALUES (NULL, '"+name+"');";
      console.log(queryString);
      db.query("USE users;");
      db.query("SELECT * from users;", function(err, result){
        console.log(result);
      });

      db.query(queryString, function(err, result){
        if (err){
          // db.end();
          return false;
        } else {
          // db.end();
          return true;
        }
      });
    }
  }
};

