// Pseudo constants
// Absolute path and ..... path
// console.log(__dirname); 
// console.log(__filename);

// Read module net. and http.
// Read new ES6 let, var, const

// var http = require('http');

// function foo(require, response) {
//     response.writeHead(200);
//     response.write('Hello World');
//     response.end();
// }

// var app =  http.createServer(foo);
// app.listen(3000, function () {
//     console.log('Server at localhost:3000')
// });

var http = require('http');

// request & response
http.createServer(function(req, res) {
    if (req.url === '/') {
        res.write('Home page');
        res.end();
    } else {
        res.write('good bye');
        res.end();
    }
}).listen(3000, function() {
    console.log('Server at localhost:3000');
    
})