var request = require('request');
//var http = require('http');

// Parse url
var data = request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  return body;
});

// request & response
// http.createServer(function(req, res) {
//     res.write('test');
//     res.end();
// }).listen(3000, function() {
//     console.log('Server at localhost:3000');
    
// })