const { Transform } = require('stream');

const trans = new Transform({
    transform(chunk, endcoding, cb) {
        this.push(chunk.toString().toUpperCase());
        cb(console.log('end of tranform'));
    }
});

process.stdin.pipe(trans).pipe(process.stdout);