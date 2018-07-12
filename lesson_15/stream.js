// Open file with not stream

// var http = require('http');

// var fs = require('fs');

// http.createServer(function(req, res) {
//     fs.readFile('demo.txt', function(err, data){
//         res.write(data);
//         if (err) {
//             console.log(err);
//         }
//         res.end();
//         // if (err) throw new Error();
//     });
// }).listen(3000, function() {
//     console.log('Server at localhost:3000');
    
// })

// Jpen file with stream
var http = require('http');

var fs = require('fs');

http.createServer(function(req, res) {
    var stream = fs.createReadStream('demo.txt');
    stream.pipe(res);
}).listen(3000, function() {
    console.log('Server at localhost:3000');
    
})