var status  = require('../status');
var feed    = require('r2j');
 
var exports = {}

exports.getPosts = function (req, res) {

  feed.load('https://medium.com/feed/@' + req.params.user)
      .then(function(posts){
        status.handleResponse(res,posts);
      })
      .catch(function(err){
        status.handleError(res, err, err, 404);
      })
      
};

module.exports = exports;