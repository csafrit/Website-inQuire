const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// var nodemailer = require('nodemailer');

const nodemailer = require('C:\\Users\\User\\UNCCHAR201802DATA2-Class-Repository-DATA\\my-app\\node_modules\\nodemailer\\lib\\nodemailer.js');

var mailOptions = {
  from: 'inQuire922@gmail.com',
  to: 'catherinesafrit@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {

    var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'inQuire922@gmail.com',
    pass: 'Treebeard56@9'
  }
});

    transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

  console.log(`Server running at http://${hostname}:${port}/`);
});