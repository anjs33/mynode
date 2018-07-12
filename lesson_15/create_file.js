var fs = require('fs');

var file = fs.createWriteStream('demo.txt');

for (var i = 0; i <= 1000000; i++) {
    file.write('Proident ut culpa aliquip qui aliqua elit dolore sit ullamco sit adipisicing anim. \n')
}

file.end();