var models = require("../models");
var bluebird = require("bluebird");
var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};


module.exports = {
  messages: {
    get: function (req, res) {
      // models.messages.get(req, res);

      // var username = data.username
      // var message = data.message
      // var querystring = "INSERT into messages "+message+" WHERE username="+username

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("In controller-message-post")
      var statusCode;
      var name=req.body.username;
      var message = req.body.message;
      var room = req.body.roomname;

      if (!(models.users.post(name, message, room))){
        statusCode=404;
        res.writeHead(statusCode, headers);
        res.end();
        
      } else {
        statusCode = 302;
        res.writeHead(statusCode, headers);
        res.end();
      }
      //models.messages.post(req, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // models.users.get(req, res);
    },
    post: function (req, res) {
      var statusCode;
      var name=req.body.username;

      if (!(models.users.post(name))){
        statusCode=404;
        res.writeHead(statusCode, headers);
        res.end();
        
      } else {
        statusCode = 302;
        res.writeHead(statusCode, headers);
        res.end();
      }
    }
  }
};




