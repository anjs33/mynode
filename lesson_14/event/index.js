// var Event = require('events').EventEmitter;

// var emt = new Event();

// var count = 0;

// var print = function() {
//     count++;
//     console.log('Click - ' + count);
// };

// // .on() == .addListener()
// emt.on('click', print);
// emt.addListener('click', print);

// // Work only one time
// emt.once('click', print);

// // TODO: notise! read this. Generate event
// emt.emit('click');

/**
 * New code.
 */
var Event = require('events').EventEmitter;

var emt = new Event();

emt.on('event', function(){
    // processNextTic - FIRST-FIRST PRIORITY. NOTICE!!
    // setImmediate - 1 priority. setTimeout - 2 prior .....
    setTimeout(function (){
        console.log('Listener 1');
    }, 0);
});

emt.on('event', function(){
    console.log('Listener 2');
});

emt.on('event', function(){
    console.log('Listener 3');
});

// Max. 10 events!!!! NOTICE!!!! 
emt.emit('event');