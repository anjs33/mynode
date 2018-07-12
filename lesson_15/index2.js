var Event = require('events').EventEmitter;
var emt = new Event();

emt.on('myEvent', function(a, b){
    console.log(a, b);
    console.log(arguments);
});

emt.emit('myEvent', 2, 3, 4, 5, 6);