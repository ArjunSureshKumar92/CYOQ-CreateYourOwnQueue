// function to send an email

var nodemailer = require('nodemailer');

exports.sendMail = function (from,to,subject,body,pass) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: from,
            pass: pass
        }
    });

    var mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}