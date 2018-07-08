var fs = require('fs');
var nodemailer = require('nodemailer');

// Get user and password
var auth = fs.readFileSync('pass.txt');
auth = auth.toString('utf8').split('$');
var user = auth[0],
    pass = auth[1];

var transporter = nodemailer.createTransport({
    servise: 'gmail',
    auth: {
        user: user,
        pass: pass
    }
});

var mailOptions = {
    from: user,
    to: 'test@gmail.com',
    subject: 'Send Email from Node.js',
    text: 'Hello friend!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});