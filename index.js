/* FCC: Request Header Parser Microservice */
var express = require('express');

var app = express();

var PORT =process.env.PORT || 3000;


app.get('/', function (req, res) {
  res.send('Please go to "/api/whoami" frome here.');
});

app.get('/api/whoami', function (req, res) {
  res.json({
        ipaddress: req.headers['x-forwarded-for'] ||
                   req.connection.remoteAddress,
        language: req.headers["accept-language"].split(",")[0],
        software: req.headers["user-agent"].split("(")[1].split(")")[0]
    });
});

app.listen(PORT, () => {
  console.log(`Node app is running on ${PORT}`);
});
